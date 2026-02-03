# vlad.execute(_) — Сайт

Сайт-портфолио: разработка и автоматизация (Telegram-боты, AI-агенты, n8n, Python).  
Автодеплой: push в `main` → GitHub Actions → VPS.

## Стек

- Astro 5, TypeScript, Tailwind CSS, React (islands)
- TypeIt (typewriter), Tippy.js (тултипы терминов)
- Vitest, Playwright

## Команды

```bash
npm install
npm run dev      # разработка http://localhost:4321
npm run build    # сборка в dist/
npm run preview  # просмотр собранного сайта
npm run test:unit   # юнит-тесты
npm run test:e2e    # E2E (после build)
npm run lint
```

## Деплой на VPS

**Автодеплой через GitHub Actions:** при push в `main` workflow собирает образ в CI и выкатывает на VPS (без сборки на сервере). Секреты в репозитории: **Settings → Secrets and variables → Actions**:

| Секрет | Описание |
|--------|----------|
| `VPS_HOST` | IP или хост сервера |
| `VPS_USER` | Пользователь SSH (например `root`) |
| `VPS_SSH_KEY` | Приватный ключ SSH (содержимое `id_rsa` и т.п.) |
| `PUBLIC_CONTACT_WEBHOOK` | (опционально) URL вебхука для формы контактов в сборке |

На VPS должны быть установлены Docker и nginx (прокси на `127.0.0.1:8080`). Контейнер `site` перезапускается с новым образом автоматически.

**Ручной деплой:** см. **[DEPLOY.md](./DEPLOY.md)** — выбор VPS, DNS, HTTPS (Let's Encrypt).

## Форма контактов

Форма на странице «Контакты» отправляет данные на вебхук (n8n, Formspree и др.). Задайте URL в переменной окружения:

- `PUBLIC_CONTACT_WEBHOOK` — POST-URL; тело запроса: `{ name, contact, message }` (JSON).

Скопируйте `.env.example` в `.env` и укажите свой вебхук. Без переменной форма покажет сообщение «Форма не настроена».

## Структура

- `src/components/` — common, layout, features, sections
- `src/content/cases/` — кейсы (Markdown)
- `src/content/guides/` — инструкции (Markdown)
- `src/content/glossary.json` — термины для тултипов
