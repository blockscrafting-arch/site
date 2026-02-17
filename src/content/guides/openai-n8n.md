---
title: "OpenAI и другие LLM в n8n"
description: "Подключение OpenAI, OpenRouter и аналогов в workflow n8n."
order: 21
category: integrations
---

В n8n можно вызывать нейросети для генерации текста, классификации, чат-ботов и т.д.

## OpenAI

1. Получите API-ключ (см. инструкцию «Получение ключа OpenAI»).
2. В n8n: **Credentials** → **Create new** → **OpenAI API** → вставьте ключ.
3. В workflow добавьте ноду **OpenAI** (Chat, Text completion и т.д.), выберите созданный credential и задайте модель (например `gpt-4o-mini`).

## OpenRouter (много моделей в одном API)

OpenRouter даёт доступ к разным моделям (OpenAI, Anthropic, Google и др.) через один ключ.

1. Получите ключ на [openrouter.ai](https://openrouter.ai/) (см. инструкцию «OpenRouter — API-ключ»).
2. В n8n используйте ноду **HTTP Request** или **OpenAI** с кастомным Base URL. Для совместимости с OpenAI-нодами укажите:
   - URL: `https://openrouter.ai/api/v1`
   - Заголовок: `Authorization: Bearer YOUR_OPENROUTER_KEY`
   - В теле запроса указывайте `model` (например `openai/gpt-4o-mini` или `anthropic/claude-3-haiku`).

Либо найдите в Community nodes интеграцию «OpenRouter» и настройте credential.

## Совет

Для экономии в тестах используйте недорогие модели (например `gpt-4o-mini` или аналог через OpenRouter). Лимиты и стоимость смотрите в личном кабинете провайдера.
