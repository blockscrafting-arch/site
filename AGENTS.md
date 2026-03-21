## Learned User Preferences

- Before implementing anything new, always do research + Context7 lookup; user explicitly requests "ресерч + context7" at the start of tasks.
- "Выполняй" is the trigger to start full plan execution without further questions.
- Quality standard is "10/10" — user frequently says "сделай на 10/10"; production-ready, polished results expected every time.
- Always commit and push (`git add -A`, meaningful message, `git push`) after completing any feature or session without being asked.
- User prices projects at minimum (делает с Cursor); when estimating effort/cost, take that into account.
- Never use Unicode emoji in UI or content — SVG icons only, or neutral typography (→, •).
- Client requirements often arrive as pasted Telegram chat logs; treat them as source of truth for requirements.
- User prefers a visible plan first, then says "выполняй" to execute — do not collapse planning and execution into one unsolicited step.
- When user says "проверь" or "проверь ещё", re-read and verify the last changes before moving on.
- Short confirmations like "хватит ли этого?", "готово?" are typical; answer concisely and proceed.

## Learned Workspace Facts

- **Portfolio site** path: `D:\vladexecute\proj\Сайт`. Stack: Astro 5 + TypeScript + Tailwind CSS 4 + React islands. Static build deployed via Docker → Nginx → VPS. CI/CD: GitHub Actions pushes image to `ghcr.io/blockscrafting-arch/site`.
- **Contact form webhook**: configured via `PUBLIC_CONTACT_WEBHOOK` env var, which is a build-time variable passed as Docker `--build-arg` from GitHub Actions Secret `PUBLIC_CONTACT_WEBHOOK`. Empty string → form shows "Форма не настроена" error.
- **SEO already integrated**: `@astrojs/sitemap`, `robots.txt` (static `public/`), JSON-LD schema (in `BaseLayout`), Yandex Metrika (ID in `site.yandexMetrikaId`, init с `webvisor`, `clickmap`, `dataLayer` для ecommerce, цели через `data-ym-goal` и `reachGoal` — список идентификаторов в `docs/METRIKA_GOALS.md`).
- **SEO + ИИ (GEO/AEO) — обязательный чеклист**: при добавлении/изменении страниц, контента или разметки агент следует правилам в `.cursor/rules/project.mdc` (раздел «SEO, классические поисковики и ИИ»): title/description/sitemap/robots, цитируемый HTML, JSON-LD, обновление `public/llms.txt` при новых важных URL; контекст — `docs/GEO_AI_VISIBILITY.md`.
- **Content Factory project** lives at `~/rostok/content-factory` on VPS (separate repo). Stack: Node.js + TypeScript, PostgreSQL, Redis, BullMQ (workers: semantics, generation, image, regenerateImage, publish), NocoDB, Google Drive OAuth (user-based, not JWT service account).
- **Content Factory known bug**: `cost_records` FK violation when `clientId` is empty string or undefined — seed must create a 'default' client row; use `||` not `??` to guard against empty strings.
- **Active client projects in scope**: (1) Whisper API video-to-content pipeline (~15K RUB); (2) Portfolio site for Kushnerev Kirill (~25K RUB, ~10 hours, frontend + design + categories, future app integration).
- **Freelance platforms**: Kwork (orders via safe transaction), МАХ (profile + portfolio), Telegram channels for blog and personal contact.
- **n8n webhook in portfolio**: Must be in Production mode (not Test) and publicly accessible; toggling Test↔Production changes the URL.
