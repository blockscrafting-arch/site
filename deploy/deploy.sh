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

echo "→ Перезапуск контейнера (образ из ghcr.io, без сборки на сервере)..."
docker compose -p opt -f deploy/docker-compose.prod.yml down --remove-orphans || true
docker rm -f opt-web-1 2>/dev/null || true
docker compose -p opt -f deploy/docker-compose.prod.yml pull
docker compose -p opt -f deploy/docker-compose.prod.yml up -d --force-recreate

echo "Готово."
