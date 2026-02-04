/**
 * Метаданные сайта: единый источник для OG, canonical, CTA.
 */
export const site = {
  name: 'vlad.execute(_)',
  description: 'Разработка и автоматизация. Telegram-боты, AI-агенты, n8n, Python.',
  url: typeof import.meta.env.SITE === 'string' && import.meta.env.SITE
    ? import.meta.env.SITE.replace(/\/$/, '')
    : 'https://vladexecute.ru',
  ogImage: '/og.svg',
  tgChannel: 'https://t.me/vladexecute',
  tgChannelHandle: '@vladexecute',
  tgContact: 'https://t.me/goutach',
  tgContactHandle: '@goutach',
} as const;
