#!/usr/bin/env bash
# Запускать из корня репозитория (например /opt): bash deploy/deploy.sh
# Требуется: sudo без пароля для cp, nginx -t, systemctl restart nginx (см. DEPLOY.md).

set -e
SITE_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$SITE_ROOT"

echo "→ Копирование конфига nginx..."
sudo cp "$SITE_ROOT/deploy/nginx-vladexecute.ru.conf" /etc/nginx/sites-available/vladexecute.ru

echo "→ Проверка nginx и перезапуск..."
sudo nginx -t && sudo systemctl restart nginx

echo "→ Перезапуск контейнера..."
docker compose down
docker compose build --no-cache
docker compose up -d

echo "Готово."
