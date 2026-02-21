/**
 * Парсит экспорт канала Telegram (result.json) и извлекает посты-кейсы.
 * Кейсы на сайте должны соответствовать постам из этого экспорта.
 *
 * Запуск (путь к result.json — первый аргумент или переменная TELEGRAM_EXPORT):
 *   node scripts/telegram-export-to-cases.mjs "d:\Downloads\Telegram Desktop\ChatExport_2026-02-16\result.json"
 *
 * Выводит список сообщений, подходящих под кейсы (Задача/Проблема + Решение/Результат/Стек),
 * и извлекает из каждого текст для ручной выкладки в src/content/cases/*.md
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");

const exportPath = process.argv[2] || process.env.TELEGRAM_EXPORT;
if (!exportPath) {
  console.error(
    "Укажите путь к result.json: node telegram-export-to-cases.mjs <path-to-result.json>",
  );
  process.exit(1);
}

/** Извлечь плоский текст из поля text (строка или массив entity). */
function getText(msg) {
  const t = msg.text;
  if (!t) return "";
  if (typeof t === "string") return t;
  return t
    .map((part) => (typeof part === "string" ? part : (part?.text ?? "")))
    .join("");
}

/** Проверить, похоже ли сообщение на кейс (проблема/решение/результат). */
function isCaseLike(text) {
  const lower = text.toLowerCase();
  const hasProblem = /(задач|проблем|было:)/.test(lower);
  const hasSolution =
    /(решение|что сделал|собрал|настроил|как это работает)/.test(lower);
  const hasResult = /(результат|стало:|stack|стек|что получил)/.test(lower);
  return (hasProblem || hasSolution) && (hasSolution || hasResult);
}

let data;
try {
  data = JSON.parse(readFileSync(exportPath, "utf-8"));
} catch (e) {
  console.error("Не удалось прочитать JSON:", e.message);
  process.exit(1);
}

const messages = (data.messages || []).filter((m) => m.type === "message");
/** Id постов канала, которые являются кейсами на сайте (единый источник правды — экспорт). */
const CASE_MESSAGE_IDS = [27, 29, 33, 35, 36, 37];
const caseMessages = messages.filter((m) => CASE_MESSAGE_IDS.includes(m.id));

console.log(
  `Всего сообщений: ${messages.length}, подходящих под кейсы: ${caseMessages.length}\n`,
);

const outDir = join(projectRoot, "scripts", "telegram-cases-export");
mkdirSync(outDir, { recursive: true });

const caseList = [];
for (const msg of caseMessages) {
  const text = getText(msg);
  const date = msg.date || "";
  const id = msg.id;
  const firstLine =
    text
      .split("\n")
      .find((l) => l.trim().length > 0)
      ?.trim()
      .slice(0, 80) || `message_${id}`;
  caseList.push({ id, date, firstLine });
  const safeName = `case-${id}-${date.slice(0, 10)}.txt`;
  writeFileSync(
    join(outDir, safeName),
    `date: ${date}\nid: ${id}\n\n${text}`,
    "utf-8",
  );
}

writeFileSync(
  join(outDir, "index.json"),
  JSON.stringify(caseList, null, 2),
  "utf-8",
);
console.log("Файлы сохранены в scripts/telegram-cases-export/");
console.log(
  "Список кейсов:",
  caseList.map((c) => `${c.id} ${c.date} ${c.firstLine}`).join("\n"),
);
