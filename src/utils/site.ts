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
  /** Путь к изображению для OG (от корня сайта). PNG 1200×630 — стандарт для всех платформ. */
  ogImage: "/og.png",
  /** Личный аккаунт Telegram для связи (написать мне). С предзаполненным сообщением. */
  tgChannel: "https://t.me/goutach?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BE%D0%B1%D1%81%D1%83%D0%B4%D0%B8%D1%82%D1%8C%20%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D1%83",
  /** Личный аккаунт Telegram без ?text (для мест, где нужна чистая ссылка). */
  tgChannelClean: "https://t.me/goutach",
  tgChannelHandle: "@goutach",
  /** Канал Telegram (кейсы, экспертика, решения). */
  tgChannelContent: "https://t.me/vladexecute",
  tgChannelContentHandle: "@vladexecute",
  /** Профиль на Kwork (услуги и отзывы). */
  kwork: "https://kwork.ru/user/goutach",
  kworkHandle: "goutach",
  /** Профиль в МАХ. */
  max: "https://max.ru/u/f9LHodD0cOKoPchozPI8Bd1QVxJcUAbooDut1B5VWFVVq-TT2SEFVimcV6s",
  maxHandle: "vladexecute",
  /** E-mail для писем и официальных запросов. */
  email: "vlad-popovich@mail.ru",
  /** Код верификации Яндекс.Вебмастер (meta name="yandex-verification"). */
  yandexVerification: "2765e3c7efaaaa7f",
  /** Код верификации Google Search Console (meta name="google-site-verification"). Задать после регистрации в GSC. */
  googleVerification: "ZgV-FzoSzdlz74VzJdyDkzVSo5zr7oy13CTWU107B8o",
  /** Номер счётчика Яндекс.Метрики. Если задан — в layout подключается скрипт счётчика. */
  yandexMetrikaId: 108173739,
  /** Реквизиты для страницы «Реквизиты» и футера (плательщик НПД). Паспортные данные — только в договоре, на сайте не публикуются. */
  legal: {
    /** Плательщик налога на профессиональный доход (самозанятый). */
    payerName: "Попович Владислав Павлович",
    inn: "910606798766",
    address: "г. Симферополь, ул. Киевская, 67, кв. 23",
    bankAccount: "40817810300076604584",
    bankName: 'АО "ТБанк"',
  },
} as const;
