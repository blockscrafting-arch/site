# vlad.execute(_) — Сайт

Сайт-портфолио: разработка и автоматизация (Telegram-боты, AI-агенты, n8n, Python).

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

**Пошаговая инструкция под домен vladexecute.ru:** см. **[DEPLOY.md](./DEPLOY.md)** — выбор VPS, DNS, HTTPS (Let's Encrypt), автодеплой.

Кратко: сборка с `SITE=https://vladexecute.ru`, образ в Docker, на сервере nginx + certbot для HTTPS, прокси в контейнер.

## Форма контактов

Форма на странице «Контакты» отправляет данные на вебхук (n8n, Formspree и др.). Задайте URL в переменной окружения:

- `PUBLIC_CONTACT_WEBHOOK` — POST-URL; тело запроса: `{ name, contact, message }` (JSON).

Скопируйте `.env.example` в `.env` и укажите свой вебхук. Без переменной форма покажет сообщение «Форма не настроена».

## Структура

- `src/components/` — common, layout, features, sections
- `src/content/cases/` — кейсы (Markdown)
- `src/content/guides/` — инструкции (Markdown)
- `src/content/glossary.json` — термины для тултипов
