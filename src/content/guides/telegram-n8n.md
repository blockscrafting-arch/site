---
title: "Telegram-бот в n8n"
description: "Подключение бота к n8n через webhook или long polling."
order: 20
category: integrations
---

Чтобы n8n обрабатывал сообщения от Telegram-бота, нужен доступ в интернет по HTTPS (домен с SSL).

## Шаги в n8n

1. Создайте workflow, добавьте ноду **Telegram Trigger**.
2. В Credentials создайте учётные данные Telegram: укажите **токен бота** (от @BotFather).
3. В ноде Telegram Trigger выберите режим:
   - **Webhook** — n8n должен быть доступен по HTTPS. Укажите публичный URL (например `https://n8n.ваш-домен.ru`) в настройках n8n (переменные окружения `N8N_HOST`, `N8N_PROTOCOL`) и откройте порт/прокси для n8n.
   - **Polling** — n8n сам опрашивает Telegram; HTTPS не обязателен, но для продакшена лучше webhook.
4. Сохраните workflow и включите его (toggle «Active»).

## Webhook: что нужно на сервере

- Домен с SSL (например поддомен для n8n).
- Nginx: проксирование с `https://n8n.ваш-домен.ru` на `http://127.0.0.1:5678`.
- В n8n в настройках (или в env) задать: `N8N_HOST=n8n.ваш-домен.ru`, `N8N_PROTOCOL=https`.

После этого бот будет отправлять входящие сообщения в n8n, и вы сможете строить цепочки (ответы, сохранение в таблицы, вызов API и т.д.).
