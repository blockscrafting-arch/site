---
title: "Установка n8n на сервер"
description: "Запуск n8n в Docker или как сервис для автоматизаций 24/7."
order: 8
category: setup
---

n8n — конструктор автоматизаций (workflow). Чтобы он работал постоянно, его нужно запустить на VPS.

## Вариант А: Docker (рекомендуется)

1. На сервере установите Docker и Docker Compose (если ещё не установлены).
2. Создайте папку и файл `docker-compose.yml`:

```yaml
services:
  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: unless-stopped
    ports:
      - "127.0.0.1:5678:5678"
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=ваш_надёжный_пароль
    volumes:
      - n8n_data:/home/node/.n8n
volumes:
  n8n_data:
```

3. Запустите: `docker compose up -d`.
4. n8n будет доступен по адресу `http://IP_СЕРВЕРА:5678`. Для доступа по домену с HTTPS настройте nginx как обратный прокси (см. инструкцию «Домен»).

## Вариант Б: Установка через npm

На сервере с установленным Node.js 20+:

```bash
npm install -g n8n
n8n start
```

Для работы в фоне используйте `pm2` или systemd (см. «Как держать бота онлайн 24/7»).

## Важно

- Включите **Basic Auth** (логин/пароль), если n8n доступен из интернета.
- Данные workflow хранятся в volume или в папке `~/.n8n` — делайте бэкапы.
