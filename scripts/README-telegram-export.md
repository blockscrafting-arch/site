# Кейсы из экспорта канала Telegram

Кейсы на сайте **обязательно** берутся из экспорта канала (например `ChatExport_*/result.json`). Других источников нет.

## Как обновить кейсы после нового экспорта

1. Экспортируйте канал в Telegram Desktop (Chat Export) и получите `result.json`.
2. Запустите скрипт (укажите путь к файлу):
   ```bash
   node scripts/telegram-export-to-cases.mjs "путь/к/result.json"
   ```
3. В `scripts/telegram-cases-export/` появятся тексты по одному на каждое сообщение-кейс (id: 27, 29, 33, 35, 36, 37).
4. При необходимости обновите или добавьте файлы в `src/content/cases/*.md`, опираясь на эти тексты. Список id кейсов задаётся в скрипте в `CASE_MESSAGE_IDS`.

## Соответствие сообщений и файлов

| id сообщения | Файл кейса              |
| ------------ | ----------------------- |
| 27           | markus.md               |
| 29           | ai-lawyer.md            |
| 33           | voice-to-text.md        |
| 35           | telegram-roi-posting.md |
| 36           | ai-content-conveyor.md  |
| 37           | voice-copilot.md        |

При добавлении нового кейса в канал: добавьте его id в `CASE_MESSAGE_IDS` в скрипте и создайте новый `.md` в `src/content/cases/`.
