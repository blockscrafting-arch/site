---
title: "Уведомления в Telegram из скрипта"
description: "Отправка сообщений в Telegram одним запросом (curl, Python, n8n)."
order: 23
category: integrations
---

Удобно слать алерты, отчёты или напоминания в Telegram из любого скрипта или сервиса.

## Через Bot API (без бота в чате)

Если у вас есть токен бота и **chat_id** получателя (вас или группы):

**curl:**

```bash
curl -s -X POST "https://api.telegram.org/bot<TOKEN>/sendMessage" \
  -d "chat_id=<CHAT_ID>" \
  -d "text=Сообщение или отчёт"
```

**Python:**

```python
import requests
token = "YOUR_BOT_TOKEN"
chat_id = "123456789"
requests.post(
    f"https://api.telegram.org/bot{token}/sendMessage",
    data={"chat_id": chat_id, "text": "Текст уведомления"}
)
```

## Как узнать chat_id

1. Напишите боту любое сообщение.
2. Откройте в браузере: `https://api.telegram.org/bot<TOKEN>/getUpdates`.
3. В ответе найдите `"chat":{"id": 123456789}` — это ваш chat_id.

Для группы: добавьте бота в группу, напишите что-то в группу, снова вызовите `getUpdates` — id чата будет отрицательным (например `-1001234567890`).

## Безопасность

Токен и chat_id храните в переменных окружения или `.env`, не в коде и не в Git (см. «Хранение API-ключей»).

## Через n8n

Добавьте ноду **Telegram** (Send Message), укажите credential с токеном бота и chat_id — удобно для уведомлений из других нод (например после выполнения задачи или при ошибке).
