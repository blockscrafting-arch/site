# Раздел «Услуги» (`/services`)

Каноничные данные — [`src/data/services.ts`](../src/data/services.ts). Страницы: [`src/pages/services/index.astro`](../src/pages/services/index.astro) (hub), [`src/pages/services/[id].astro`](../src/pages/services/[id].astro) (детальная).

## Поведение (актуально)

- **Цены в UI не показываются** ни на hub-карточках, ни в hero детальной страницы, ни в блоке «Реальные проекты» (ссылки на кейсы без сумм).
- Поля **`price`** и **`priceNote`** в `Service` **сохраняются в данных** для JSON-LD `Offer` (в `<head>` у `/services/[id]`: `description` оффера = строка цены). Это даёт поисковикам ориентир без витринного прайса.
- Секция **«Варианты сотрудничества»** (тарифные карточки из `packages`) **не рендерится** на сайте; массив `packages` в `services.ts` можно оставить для внутренних ориентиров или будущего использования.

## Поля `Service`

| Поле | Назначение |
|------|------------|
| `id`, `title`, `pitch`, `description`, `features`, `seoDescription` | Тексты и SEO |
| `price`, `priceNote?` | JSON-LD Offer; **не** выводятся в шаблоне |
| `iconPath` | SVG path (`d=`) для иконки на hub |
| `outcomes` | 3 короткие строки результата на hub-карточке |
| `painPoints` | 3–4 боли для секции «Знакомо?» на детальной |
| `relatedCases` | `{ slug, title, metric?, price }` — **`price` в UI не используется** |
| `review?` | Отзыв; блок в стиле `.case-testimonial` |
| `packages?` | Не отображается на сайте |

## Стили

Классы в [`src/styles/global.css`](../src/styles/global.css): `.svc-hub-card`, `.svc-pain-card`, `.svc-feature-card`, `.svc-cta-accent`, `.svc-eyebrow`.

## Метрика

Цели Яндекс.Метрики для кликов — см. [`docs/METRIKA_GOALS.md`](METRIKA_GOALS.md) (`services_card_click`, `service_case_click`, CTA).
