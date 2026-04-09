export type ReviewCategory =
  | 'bot'
  | 'automation'
  | 'parser'
  | 'web-app'
  | 'content-factory'
  | 'ai-agent'
  | 'script';

export interface Review {
  author: string;
  project: string;
  category: ReviewCategory;
  label: string;
  rating: 5;
  text: string;
  featured?: boolean;
}

export const CATEGORY_LABELS: Record<ReviewCategory, string> = {
  bot: 'Telegram-бот',
  automation: 'Автоматизация',
  parser: 'Парсинг',
  'web-app': 'Web-приложение',
  'content-factory': 'Контент-завод',
  'ai-agent': 'AI-агент',
  script: 'Скрипт',
};

export const reviews: Review[] = [
  {
    author: 'Nsltd',
    project: 'Система парсинга',
    category: 'parser',
    label: 'Парсинг',
    rating: 5,
    text: 'Идеальная работа! Тот случай, один на сотню, когда человек делом подтверждает все свои слова.',
    featured: true,
  },
  {
    author: 'Кирилл Кушнерёв',
    project: 'Интернет-магазин Щенок Игруля',
    category: 'web-app',
    label: 'Web-приложение',
    rating: 5,
    text: 'Спасибо большое Владиславу за оперативную качественную разработку. На время проекта мы стали настоящей командой: Владислав неоднократно предлагал новшества и помогал в реализации всех моих задумок. Специалисту характерны умение слушать и слышать. Обязательно обращусь ещё!',
  },
  {
    author: 'Александр Петушкевич',
    project: 'HVAC AI — мониторинг микроклимата',
    category: 'automation',
    label: 'Автоматизация',
    rating: 5,
    text: 'Работа выполнена на наивысшую оценку. Владислав полностью проконсультировал и ответил на все вопросы бесплатно. Работа сделана в кратчайшие сроки. Рекомендую',
  },
  {
    author: 'postlunapark',
    project: 'Контент-завод: Telegram + VK + Дзен',
    category: 'content-factory',
    label: 'Контент-завод',
    rating: 5,
    text: 'Теперь все время могу потратить на более важные задачи, чем руками всё постить.',
  },
  {
    author: 'elena_bukina',
    project: 'Бот на Python с OCR',
    category: 'bot',
    label: 'Telegram-бот',
    rating: 5,
    text: 'Редкое сочетание профессионализма и скорости выполнения. Рекомендую!',
  },
  {
    author: 'wildtorneo',
    project: 'Автоматизация email-рассылки',
    category: 'automation',
    label: 'Автоматизация',
    rating: 5,
    text: 'Всё было сделано профессионально, быстро и именно так как нужно! Рекомендую!',
  },
  {
    author: 'evgenijjstrannik',
    project: 'Парсер закрытых Telegram-чатов',
    category: 'parser',
    label: 'Парсинг',
    rating: 5,
    text: 'Всё выполнено на высшем уровне, всем рекомендую.',
  },
  {
    author: 'svyat007',
    project: 'WHOOP PWA',
    category: 'web-app',
    label: 'Web-приложение',
    rating: 5,
    text: 'ОООООоооооочень быстро сделал. Я доволен !!',
  },
  {
    author: 'neonumberone1',
    project: 'Скрипт на VDS',
    category: 'script',
    label: 'Скрипт',
    rating: 5,
    text: 'Всё понравилось!',
  },
  {
    author: 'vitaly1303',
    project: 'Разработка бота для MAX',
    category: 'bot',
    label: 'Telegram-бот',
    rating: 5,
    text: 'Все круто!',
  },
  {
    author: 'Всеволод',
    project: 'Bitrix24 → Яндекс Метрика',
    category: 'automation',
    label: 'Автоматизация',
    rating: 5,
    text: 'Редкая возможность встретить такого специалиста, как Владислав, который еще на этапе отклика на заявку проявил свою экспертность — сразу сориентировал без воды, какая архитектура решения необходима. Быстро реализовал решение. Скорее всего, будем обращаться ещё',
  },
];
