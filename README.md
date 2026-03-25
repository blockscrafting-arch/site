# vlad.execute(\_) — Сайт

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

Кратко: при сборке образа задаются `SITE` и `PUBLIC_CONTACT_WEBHOOK` (через `.env` на сервере и `docker compose build` или через `--build-arg` при локальной сборке). На сервере — nginx + certbot для HTTPS, прокси в контейнер.

## Форма контактов

Форма на странице «Контакты» отправляет данные на вебхук (n8n, Formspree и др.). Задайте URL в переменной окружения:

- `PUBLIC_CONTACT_WEBHOOK` — POST-URL; тело запроса: `{ name, contact, message }` (JSON).

Скопируйте `.env.example` в `.env` и укажите свой вебхук. Без переменной форма покажет сообщение «Форма не настроена». При деплое в Docker URL вебхука подставляется **при сборке** образа (см. DEPLOY.md).

## Структура

- `src/components/` — common, layout, features, sections
- **Первый экран главной:** в `Hero.astro` у секции задано `min-h-[calc(100svh-4rem)]` (вьюпорт минус высота фиксированного хедера). При смене высоты шапки обновить и эту формулу.
- `src/content/cases/` — кейсы (Markdown, Astro Content Collections)
- `src/content/guides/` — инструкции (Markdown)
- `src/content/glossary.json` — термины для тултипов
- `src/data/services.ts` — 8 услуг для `/services` и `/services/[id]`; см. [docs/SERVICES.md](./docs/SERVICES.md)

### Кейсы и главная

- Схема полей: `src/content/config.ts`.
- На главной блок **«Проекты с цифрами»** автоматически показывает **4 новейших** кейса по полю `date` (без черновиков). Для карточки используется первая метрика `metrics[0]`; для формата «до → после» задайте у неё `before` и `after` в frontmatter.
- Подробнее: [docs/CONTENT_CASES.md](./docs/CONTENT_CASES.md) и `.cursor/rules/content.mdc`.

### Услуги

- Hub и детальные страницы: `src/pages/services/`. Цены в интерфейсе не выводятся; в данных — для JSON-LD.
- [docs/SERVICES.md](./docs/SERVICES.md) — поля, стили, отличия от старого блока тарифов.
