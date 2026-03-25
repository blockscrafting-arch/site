## Learned User Preferences

- Before implementing anything new, always do research + Context7 lookup; user explicitly requests "ресерч + context7" at the start of tasks. When user says "уверен на 100%?" — do extra research/cross-check, not just affirm.
- "Выполняй" is the trigger to start full plan execution without further questions.
- Quality standard is "10/10" — production-ready, polished. Always benchmark against industry leaders (Vercel, Linear, Cal.com) — user says "равняться на лидеров", not internal guesses.
- Always commit and push (`git add -A`, meaningful message, `git push`) after completing any feature or session without being asked.
- User prices projects at minimum (делает с Cursor); when estimating effort/cost, take that into account.
- Never use Unicode emoji in UI or content — SVG icons only, or neutral typography (→, •).
- Client requirements often arrive as pasted Telegram chat logs; treat them as source of truth for requirements.
- User prefers a visible plan first, then says "выполняй" to execute — do not collapse planning and execution into one unsolicited step.
- When user says "проверь" or "проверь ещё", re-read and verify the last changes before moving on.
- Short confirmations like "хватит ли этого?", "готово?" are typical; answer concisely and proceed.
- Never display metrics that make the portfolio look small (e.g., project count "13 проектов" was explicitly removed, exact Kwork review count "6 отзывов" highlights smallness); show qualitative trust signals instead.
- Case studies on the portfolio site must include screenshots/visuals and an external link to the result — never leave cases as bare text. The homepage «Проекты с цифрами» block (`CasesPreview`) lists the **four newest cases by `date`** (not `featuredOrder`); keep `metrics[0]` strong—prefer **`before` / `after`** strings for the headline metric. Case UI must stay readable in light theme (contrast), not only dark.

## Learned Workspace Facts

- **Portfolio site** path: `D:\vladexecute\proj\Сайт`. Stack: Astro 5 + TypeScript + Tailwind CSS 3.4 + React islands. Static build deployed via Docker → Nginx → VPS. CI/CD: GitHub Actions pushes image to `ghcr.io/blockscrafting-arch/site`. No CMS — content lives in Astro Content Collections (markdown in repo).
- **Contact form webhook**: configured via `PUBLIC_CONTACT_WEBHOOK` env var, which is a build-time variable passed as Docker `--build-arg` from GitHub Actions Secret `PUBLIC_CONTACT_WEBHOOK`. Empty string → form shows "Форма не настроена" error.
- **Layout padding**: `<main id="main-content">` in BaseLayout already applies `pt-16` (compensates for the fixed `h-16` header). Inner page sections should add only `pt-4`–`pt-8` for breathing room — never re-add `pt-20+`.
- **Flex container text nodes**: Direct `{variable}` text nodes inside `flex` containers create anonymous flex items causing broken/stretched text. Always wrap in `<span class="min-w-0">`. Also: `hyphens: none; -webkit-hyphens: none` is set on `html` in `global.css` to prevent auto-hyphenation from `lang="ru"`.
- **SEO infrastructure (2026-03 audit)**: OG PNG 1200x630 (`public/og.png`), `og:image:width/height/type`, per-page `ogType`/`publishedTime`/`noindex` props in BaseLayout, WebSite JSON-LD in `@graph`, sitemap with filter/priority/changefreq, `google-site-verification` ready (set code in `site.googleVerification`), all JSON-LD in `<head>` via `schema` prop. Yandex Metrika (IDs in `docs/METRIKA_GOALS.md`). При добавлении/изменении страниц/контента — обязательный чеклист в `.cursor/rules/project.mdc` (SEO + GEO/AEO): title/description/sitemap/robots, JSON-LD, `public/llms.txt`; контекст — `docs/GEO_AI_VISIBILITY.md`.
- **Public-facing minimum price**: «от 5 000 р» — синхронизировано на Hero, about, services, cases, llms.txt. Реальные цены отдельных услуг (автопостинг от 4 000) не менять.
- **Kwork brand color**: `#F5A500` (orange) — used for Kwork card accent on `/contact` page; do not use site green for third-party brand elements.
- **Content Factory project** lives at `~/rostok/content-factory` on VPS (separate repo). Stack: Node.js + TypeScript, PostgreSQL, Redis, BullMQ (workers: semantics, generation, image, regenerateImage, publish), NocoDB, Google Drive OAuth (user-based, not JWT service account).
- **Content Factory known bug**: `cost_records` FK violation when `clientId` is empty string or undefined — seed must create a 'default' client row; use `||` not `??` to guard against empty strings. Onboarding bot token env var is `ONBOARDING_BOT_TOKEN` (not `TELEGRAM_ONBOARDING_BOT_TOKEN`).
- **Active client projects in scope**: (1) Whisper API video-to-content pipeline (~15K RUB); (2) Kushnerev Kirill — интернет-магазин «Щенок Игруля» (~25K RUB, ~10 дней): Next.js + PostgreSQL, ЮKassa и СДЭК, деплой на Beget VPS; (3) MAX-бот подписок для йога-инструктора (Prodamus оплата, dev.max.ru, управление тарифами/подписчиками).
- **Freelance platforms**: Kwork (orders via safe transaction), МАХ (profile + portfolio), Telegram channels for blog and personal contact.
- **n8n webhook in portfolio**: Must be in Production mode (not Test) and publicly accessible; toggling Test↔Production changes the URL.
