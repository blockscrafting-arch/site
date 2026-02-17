#!/usr/bin/env bash
# Запускать из корня репозитория (например /opt): bash deploy/deploy.sh
# Требуется: sudo без пароля для cp, nginx -t, systemctl reload nginx (см. DEPLOY.md).

set -e
SITE_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$SITE_ROOT"

echo "→ Копирование конфига nginx..."
sudo cp "$SITE_ROOT/deploy/nginx-vladexecute.ru.conf" /etc/nginx/sites-available/vladexecute.ru

echo "→ Проверка nginx и перезагрузка..."
sudo nginx -t && sudo systemctl reload nginx

echo "→ Перезапуск контейнера..."
docker compose down
docker compose up -d --build

echo "Готово."
