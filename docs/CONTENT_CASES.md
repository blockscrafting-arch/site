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
