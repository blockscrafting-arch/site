/**
 * Метаданные сайта: единый источник для OG, canonical, CTA.
 */
export const site = {
  name: 'vlad.execute(_)',
  description: 'Разработка и автоматизация. Telegram-боты, AI-агенты, n8n, Python.',
  /** Базовый URL сайта (без слэша в конце). При сборке задаётся через SITE (или по умолчанию vladexecute.ru). */
  url: typeof import.meta.env.SITE === 'string' && import.meta.env.SITE
    ? import.meta.env.SITE.replace(/\/$/, '')
    : 'https://vladexecute.ru',
  /** Путь к изображению для OG (от корня сайта). Для лучшей совместимости соцсетей замените на og.png 1200×630. */
  ogImage: '/og.svg',
  /** Канал Telegram для подписки (CTA на главной). */
  tgChannel: 'https://t.me/vladexecute',
  tgChannelHandle: '@vladexecute',
  /** Личный контакт для связи (страница контактов, футер). */
  tgContact: 'https://t.me/goutach',
  tgContactHandle: '@goutach',
} as const;
