/**
 * Метаданные сайта: единый источник для OG, canonical, CTA.
 */
export const site = {
  name: "vlad.execute(_)",
  /** Краткое описание для meta, соцсетей и AI-поиска (AEO/SEO). До ~160 символов. */
  description:
    "Разработка и автоматизация: боты и Mini Apps в Telegram, MAX, VK; AI-агенты, n8n, Python. Кейсы с результатами. Заказать под ключ — отвечу в течение дня.",
  /** Базовый URL сайта (без слэша в конце). При сборке задаётся через SITE (или по умолчанию vladexecute.ru). */
  url:
    typeof import.meta.env.SITE === "string" && import.meta.env.SITE
      ? import.meta.env.SITE.replace(/\/$/, "")
      : "https://vladexecute.ru",
  /** Путь к изображению для OG (от корня сайта). Для лучшей совместимости соцсетей замените на og.png 1200×630. */
  ogImage: "/og.svg",
  /** Личный аккаунт Telegram для связи (написать мне). */
  tgChannel: "https://t.me/goutach",
  tgChannelHandle: "@goutach",
  /** Канал Telegram (кейсы, экспертика, решения). */
  tgChannelContent: "https://t.me/vladexecute",
  tgChannelContentHandle: "@vladexecute",
} as const;
