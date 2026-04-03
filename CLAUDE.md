# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Проект

**vlad.execute(_)** — сайт-портфолио разработчика автоматизации и AI. Услуги (Telegram-боты, AI-агенты, n8n, Python), кейсы, инструкции. Аудитория — бизнес и частные заказчики. Сайт на русском языке.

## Стек

- **Astro 5** (static output) + **React 19** (islands — только интерактивные компоненты)
- **TypeScript 5.6** (strict), **Tailwind CSS 3.4** (utility-first, dark mode via `class`)
- **Vitest** (unit) + **Playwright** (E2E)
- **Docker** (multi-stage: Node.js build → Nginx) → VPS

## Команды

```bash
npm run dev          # Dev-сервер на http://localhost:4321
npm run build        # Продакшн-сборка в dist/
npm run preview      # Превью собранного сайта
npm run test         # Vitest в watch mode
npm run test:unit    # Vitest однократно
npm run test:e2e     # Build + Playwright (Chromium)
npm run lint         # ESLint
npm run format       # Prettier
```

## Архитектура

### Island Architecture
`.astro` страницы — статический HTML (build-time). React используется **только** для интерактивных islands (`client:load`): ContactForm, ThemeToggle, GlossaryActivator, CopyButton. Минимизировать client-side JS.

### Content Collections
Markdown-контент в `src/content/` со схемами Zod в `src/content/config.ts`:
- **cases/** — кейсы: frontmatter с title, description, result, stack, date, metrics, categories и др.
- **guides/** — инструкции: title, description, order, category

На главной показываются **4 новейших** кейса по `date` (не по `featuredOrder`). Первая метрика `metrics[0]` рендерится на карточке; пара `before`/`after` даёт сравнение «до → после».

### Data-Driven Services
8 услуг определены в `src/data/services.ts` — типизированный массив, без CMS. Используется на `/services` (хаб) и `/services/[id]` (детальная страница).

### Маршрутизация
Файловая (Astro pages): `/`, `/about`, `/contacts`, `/cases/[slug]`, `/guides/[slug]`, `/services/[id]`, `/legal/*`, `/404`. Редирект: `/services/autoposting` → `/services/content-factory`.

### Layout
`BaseLayout.astro` — мастер-шаблон: meta, OG, JSON-LD, хедер (`h-16`), футер. `<main id="main-content">` с `pt-16`. Hero: `min-h-[calc(100svh-4rem)]` — при изменении высоты хедера синхронизировать `4rem`.

### Тема
CSS custom properties (`--color-surface`, `--color-accent` и др.) в `src/styles/global.css`. Класс `.dark` на `<html>` переключает тему. Поддержка `prefers-color-scheme` + ручной тоггл.

### Форма контактов
React island `ContactForm.tsx` отправляет POST на `PUBLIC_CONTACT_WEBHOOK` (env-переменная, задаётся при сборке). JSON body: `{ name, contact, message }`.

## SEO и AEO (AI-видимость)

При добавлении/изменении страниц и контента — обязательный чеклист:
- Уникальные `title`, `description`, canonical, OG/Twitter meta
- JSON-LD: WebSite, Person, ProfessionalService, Article, FAQPage, BreadcrumbList. Автор — `https://SITE/#person`
- Новые URL → обновить `public/llms.txt` (спека llmstxt.org) и проверить `public/robots.txt`
- Sitemap генерируется автоматически (Astro integration)
- Контент — чистый HTML, цитируемые формулировки. Справочно: `docs/GEO_AI_VISIBILITY.md`

## Правила контента

- **Никаких Unicode-эмодзи** в интерфейсе и контенте. Только SVG-иконки или типографика (→, •)
- Категории кейсов: `bot`, `ai-agent`, `automation`, `web-app`, `parser`, `script`, `content-factory`
- Глоссарий: `src/content/glossary.json` — термины с `term` и `description` для тултипов

## Переменные окружения

```
PUBLIC_CONTACT_WEBHOOK=   # URL для отправки формы (n8n, Formspree и т.д.)
SITE=https://vladexecute.ru  # Переопределение базового URL
```

## Тестирование

- **Unit** (Vitest): утилиты, парсинг, валидация. Файлы в `tests/unit/`
- **E2E** (Playwright): навигация, формы, typewriter, тултипы. Файлы в `tests/e2e/`
- Описательные имена тестов на русском: `it('показывает тултип при наведении на термин n8n')`

## Path Aliases (tsconfig)

`@/*`, `@components/*`, `@layouts/*`, `@content/*` → `src/...`

## Документация разделов

- Кейсы: `docs/CONTENT_CASES.md`
- Услуги: `docs/SERVICES.md`
- Деплой: `DEPLOY.md`
- Метрика: `docs/METRIKA_GOALS.md`
