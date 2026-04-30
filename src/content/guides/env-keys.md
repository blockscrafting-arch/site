---
title: "Хранение API-ключей и секретов"
description: "Как безопасно хранить токены в .env и не попасть в репозиторий."
order: 10
category: setup
---

API-ключи, пароли и токены не должны быть в коде и в Git.

## Файл .env

В корне проекта создайте файл `.env`:

```env
TELEGRAM_BOT_TOKEN=7123123:AAHe...
OPENAI_API_KEY=sk-proj-...
DATABASE_URL=replace_with_postgres_connection_string
```

В коде подключайте переменные окружения, а не строки из файла. В Python:

```python
import os
from dotenv import load_dotenv

load_dotenv()
token = os.getenv("TELEGRAM_BOT_TOKEN")
```

Установите пакет: `pip install python-dotenv`.

## .env не должен попадать в Git

В `.gitignore` обязательно должна быть строка:

```
.env
.env.local
.env.*.local
```

Проверьте: `git status` не должен показывать `.env`.

## На сервере

Создайте `.env` вручную на VPS (или копируйте безопасным способом). После деплоя через Git файл не перезаписывается, если его нет в репозитории.

## Альтернативы

- **n8n:** секреты хранятся в Credentials в интерфейсе n8n.
- **Docker:** передавайте переменные через `environment` в `docker-compose.yml` или через файл env (не коммитьте его).
