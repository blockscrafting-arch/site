---
title: "Виртуальное окружение Python"
description: "Создание venv и установка зависимостей для скриптов и ботов."
order: 9
category: setup
---

Чтобы изолировать зависимости проекта и не конфликтовать с системным Python, используйте виртуальное окружение.

## Создание и активация

В папке проекта:

```bash
python3 -m venv .venv
source .venv/bin/activate   # Linux / macOS
# или на Windows: .venv\Scripts\activate
```

В начале строки появится `(.venv)` — окружение активно.

## Установка зависимостей

```bash
pip install -r requirements.txt
```

Если файла `requirements.txt` ещё нет, создайте его после установки пакетов:

```bash
pip install python-telegram-bot openai
pip freeze > requirements.txt
```

## На сервере (VPS)

После `git pull` или копирования кода:

```bash
cd /path/to/project
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Дальше запускайте скрипт или бота из этого окружения (или настройте systemd так, чтобы он активировал `.venv` перед запуском).
