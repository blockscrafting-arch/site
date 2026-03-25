# Кейсы: контент и главная

Каноничное описание правил и примеров frontmatter — в [`.cursor/rules/content.mdc`](../.cursor/rules/content.mdc).

## Кратко

| Тема | Где |
|------|-----|
| Схема полей кейса | [`src/content/config.ts`](../src/content/config.ts) |
| Блок «Проекты с цифрами» на главной | [`src/components/sections/CasesPreview.astro`](../src/components/sections/CasesPreview.astro) |
| Файлы кейсов | `src/content/cases/*.md` |

## Поведение главной

- В блок попадают **4 новейших** кейса с `draft: false`, сортировка по **`date`** (убывание).
- На карточке используется **`metrics[0]`**. Для визуала «до → после» у первой метрики задайте поля **`before`** и **`after`**; иначе — **`value`** (как раньше).
- **`featuredOrder`** порядок на главной **не определяет** (поле оставлено в схеме для совместимости).

## Пример `metrics`

```yaml
metrics:
  - { label: "Статей в день", before: "1–2", after: "10" }
  - { value: "3", label: "AI-модели в конвейере" }
```

## Страница кейса (`/cases/[slug]`)

- Шаблон: [`src/pages/cases/[slug].astro`](../src/pages/cases/[slug].astro) — hero, snapshot strip, метрики (режимы `before`/`after`, чистое число, текстовый тег), галерея, Markdown-тело, при отсутствии скриншотов — полоса стека, отзыв, итог, следующий кейс.
- Обертка тела: на корневом контейнере страницы задан класс **`case-detail`** (нужен для стилей prose).
- **Стили Markdown внутри кейса** (главы, шаги, цитаты, код-схемы): в [`src/styles/global.css`](../src/styles/global.css) селекторы `.case-detail .prose` — `h2` как разделы с верхней линией и акцент-полосой, `h3` с точкой, нумерованные списки с круглыми номерами, `blockquote` как insight-callout, блоки Shiki `.astro-code` в стиле flow-диаграммы, кастомные маркеры у `ul`.
- Дополнительные блоки кейса (метрики, pull-quote проблемы и т.д.): классы `.case-impact-*`, `.case-metric-ba`, `.case-metric-tag`, `.case-result-callout`, `.case-stack-visual` и др. в том же `global.css`.
