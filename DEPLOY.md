# Пошаговый деплой на vladexecute.ru

Домен куплен: **vladexecute.ru**. Ниже — выбор VPS, настройка сервера, DNS, HTTPS и автодеплой.

---

## Шаг 1. Какой VPS арендовать

Сайт статический (Astro + nginx в Docker): нагрузка минимальная.

### Рекомендуемые параметры

| Параметр | Минимум          | Комфортно |
| -------- | ---------------- | --------- |
| CPU      | 1 vCPU           | 1–2 vCPU  |
| RAM      | 512 MB           | 1 GB      |
| Диск     | 5–10 GB SSD      | 10–20 GB  |
| ОС       | Ubuntu 22.04 LTS | —         |

Этого хватит и на будущие сервисы (n8n, боты на том же сервере — тогда лучше сразу 2 GB RAM).

### Где брать

**Российские провайдеры (удобно для .ru и оплаты):**

- **Timeweb** — от ~200 ₽/мес, панель простая, есть тарифы с 1 GB RAM.
- **Selectel** — от ~300 ₽/мес, стабильно, хорошая сеть.
- **REG.RU (VPS)** — домен уже там можно держать, VPS в одном кабинете.
- **RuVDS** — недорого, от ~150 ₽/мес.

**Зарубежные (если не важен РФ хостинг):**

- **Hetzner** — от ~€4/мес, 2 GB RAM, очень выгодно.
- **DigitalOcean** — от $6/мес, удобно для старта.
- **Linode (Akamai)** — от $5/мес.

**Итог:** для одного статического сайта достаточно **1 vCPU, 1 GB RAM, 10 GB SSD**. Выберите провайдера и тариф, создайте VPS на **Ubuntu 22.04 LTS**, запишите **IP-адрес** — он понадобится для DNS и SSH.

---

## Шаг 2. Подключение к серверу и базовая настройка

1. Подключитесь по SSH (логин из письма/панели, обычно `root` или `ubuntu`):

```bash
ssh root@ВАШ_IP
# или
ssh ubuntu@ВАШ_IP
```

2. Обновите систему и установите Docker:

```bash
apt update && apt upgrade -y
apt install -y ca-certificates curl
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
chmod a644 /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
apt update
apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

3. (Рекомендуется) Создайте отдельного пользователя для деплоя и отключите вход под root по паролю:

```bash
adduser deploy
usermod -aG docker deploy
usermod -aG sudo deploy
# Настройте SSH-ключ для deploy (см. шаг 6 для GitHub Actions)
```

Дальше можно работать под `deploy` или под root — по вашему выбору.

---

## Шаг 3. DNS для vladexecute.ru

В панели управления доменом (REG.RU, Timeweb, Cloudflare и т.д.) добавьте A-записи:

| Тип | Имя | Значение      | TTL |
| --- | --- | ------------- | --- |
| A   | @   | IP_ВАШЕГО_VPS | 300 |
| A   | www | IP_ВАШЕГО_VPS | 300 |

Если используете **Cloudflare** (бесплатно): включите прокси (оранжевое облако) и SSL/TLS = Full (или Full strict после настройки сертификата на VPS). Тогда в DNS у Cloudflare тоже A на ваш IP.

Проверка (через 5–15 минут):

```bash
ping vladexecute.ru
ping www.vladexecute.ru
```

Должен отвечать ваш VPS IP.

---

## Шаг 4. Первый деплой сайта (без HTTPS)

На **вашем компьютере** (где лежит проект):

1. Соберите образ с правильным URL для продакшена (и вебхуком формы, если нужен):

```bash
cd "d:/vladexecute/proj/Сайт"
# Вариант А: передать переменные при сборке (подставляются в статику при npm run build внутри образа)
docker build -t vlad-execute-site -f docker/Dockerfile . \
  --build-arg SITE=https://vladexecute.ru \
  --build-arg PUBLIC_CONTACT_WEBHOOK=https://ваш-n8n.ru/webhook/ваш-id

# Вариант Б: если собираете на сервере через docker compose, положите в каталог с docker-compose.yml файл .env с SITE и PUBLIC_CONTACT_WEBHOOK (см. пункт 3 в разделе «Деплой прошёл, но сайт старый»).
```

2. Сохраните образ в файл и залейте на сервер (или позже настроите GitHub Actions):

```bash
docker save vlad-execute-site:latest | gzip > vlad-execute-site.tar.gz
scp vlad-execute-site.tar.gz root@ВАШ_IP:/tmp/
```

На **сервере**:

```bash
docker load < /tmp/vlad-execute-site.tar.gz
docker run -d --name site -p 80:80 --restart unless-stopped vlad-execute-site:latest
```

Проверка: откройте в браузере `http://ВАШ_IP` и `http://vladexecute.ru` (если DNS уже указывает на этот IP). Сайт должен открываться.

---

## Шаг 5. HTTPS (Let's Encrypt) через nginx на хосте

Чтобы работали `https://vladexecute.ru` и `https://www.vladexecute.ru`, на сервере ставим nginx и certbot, SSL завершаем на хосте, в контейнер идёт уже HTTP.

1. На сервере установите nginx и certbot:

```bash
apt install -y nginx certbot python3-certbot-nginx
```

2. Остановите контейнер с портом 80 (nginx займёт 80 для проверки домена):

```bash
docker stop site
docker rm site
```

3. Получите сертификат (certbot сам создаст заготовку конфига nginx):

```bash
certbot --nginx -d vladexecute.ru -d www.vladexecute.ru
```

Введите email, согласитесь с условиями. Certbot создаст конфиг и получит сертификаты.

4. Настройте nginx как прокси к контейнеру. Запустите контейнер на внутреннем порту 9080:

```bash
docker run -d --name site -p 127.0.0.1:9080:80 --restart unless-stopped vlad-execute-site:latest
```

5. Создайте конфиг nginx для сайта (или отредактируйте тот, что создал certbot):

```bash
nano /etc/nginx/sites-available/vladexecute.ru
```

Содержимое (подставьте свой путь к конфигу, если certbot уже создал файл — добавьте в него `location /` и `proxy_*`):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name vladexecute.ru www.vladexecute.ru;

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/certbot;
        default_type "text/plain";
        try_files $uri =404;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name vladexecute.ru www.vladexecute.ru;

    ssl_certificate /etc/letsencrypt/live/vladexecute.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/vladexecute.ru/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/certbot;
        default_type "text/plain";
        try_files $uri =404;
    }

    location / {
        proxy_pass http://127.0.0.1:9080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Если certbot уже создал файл в `sites-available`, откройте его и замените блок `location /` на `proxy_pass http://127.0.0.1:9080` и заголовки выше. Либо поместите этот конфиг в отдельный файл и сделайте симлинк:

```bash
ln -s /etc/nginx/sites-available/vladexecute.ru /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

6. Проверка: откройте `https://vladexecute.ru` и `https://www.vladexecute.ru`. Сертификат продлевается автоматически (certbot timer).

Чтобы nginx подхватывал новый сертификат после автопродления, добавьте deploy-hook:

```bash
cat >/etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh <<'EOF'
#!/usr/bin/env bash
set -e
systemctl reload nginx
EOF
chmod +x /etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh
```

---

## Шаг 6. Автодеплой через GitHub Actions (по желанию)

Чтобы при каждом `push` в `main` сайт собирался и обновлялся на VPS:

1. Репозиторий проекта на GitHub.
2. В настройках репозитория: **Settings → Secrets and variables → Actions** добавьте секреты:
   - `VPS_HOST` — IP вашего VPS
   - `VPS_USER` — пользователь для SSH (например `deploy` или `root`)
   - `VPS_SSH_KEY` — приватный ключ SSH (содержимое `id_rsa` или аналог), которым можно зайти на VPS без пароля

3. На сервере подготовьте каталог и клонируйте репозиторий:

```bash
mkdir -p /opt/vlad-execute-site
cd /opt/vlad-execute-site
git clone https://github.com/ВАШ_ЛОГИН/ВАШ_РЕПО.git .
```

В каталоге деплоя должен быть `docker-compose.yml` из репозитория (в нём заданы сборка и порт 9080). **Создайте там же файл `.env`** с переменными `SITE` и `PUBLIC_CONTACT_WEBHOOK` — при `docker compose up -d --build` они передаются в сборку, иначе форма контактов и canonical URL будут пустыми (см. пункт 3 раздела «Деплой прошёл, но сайт старый»).

4. В workflow деплой вызывает `deploy/deploy.sh`: подставляет конфиг nginx из репозитория (`deploy/nginx-vladexecute.ru.conf`, порт **9080**), перезагружает nginx и перезапускает контейнер. Путь на сервере в workflow — `cd /opt` (репозиторий должен быть в `/opt` или поправьте путь в `.github/workflows/deploy.yml`).

5. **Один раз на VPS** настройте sudo для пользователя деплоя (тот, что в `VPS_USER`), чтобы скрипт мог копировать конфиг и перезагружать nginx без пароля:

```bash
sudo visudo
```

Добавьте строку (подставьте имя пользователя вместо `deploy`):

```
deploy ALL=(ALL) NOPASSWD: /usr/bin/cp *deploy/nginx*.conf /etc/nginx/sites-available/*, /usr/sbin/nginx, /usr/bin/systemctl restart nginx
```

Или проще — разрешить все команды для deploy (менее безопасно, но проще):

```
deploy ALL=(ALL) NOPASSWD: ALL
```

Убедитесь, что симлинк nginx создан: `sudo ln -sf /etc/nginx/sites-available/vladexecute.ru /etc/nginx/sites-enabled/`.

После этого при push в `main` workflow **собирает образ в CI** (не на сервере), пушит его в GitHub Container Registry (ghcr.io), подключается по SSH, выполняет `git fetch`/`reset` и `bash deploy/deploy.sh`: на сервере только **pull** образа и `up` (без тяжёлой сборки). Конфиг nginx обновляется из репо (порт 9080), nginx перезагружается, контейнер перезапускается с новым образом.

**Первый раз после перехода на CI-сборку:** образ в ghcr.io по умолчанию приватный. В репозитории GitHub: **Packages** → пакет образа → **Package settings** → **Change visibility** → **Public**. Тогда сервер сможет делать `docker pull` без авторизации.

---

## Деплой прошёл, но сайт старый — что проверить

1. **Nginx проксирует на нужный порт?** Конфиг лежит в репо: `deploy/nginx-vladexecute.ru.conf` (порт **9080**). При каждом деплое он копируется на сервер через `deploy/deploy.sh`. Если что-то меняли вручную на VPS — после следующего push конфиг из репо перезапишет. Проверка вручную: `proxy_pass http://127.0.0.1:9080;`, затем `sudo nginx -t && sudo systemctl restart nginx`.

2. **Контейнер запущен?** На сервере: `cd /opt && docker compose -p opt -f deploy/docker-compose.prod.yml ps`. Должен быть `opt-web-1` в статусе Up. Если нет — `docker compose -p opt -f deploy/docker-compose.prod.yml pull && docker compose -p opt -f deploy/docker-compose.prod.yml up -d`.

3. **Форма контактов пишет «не указан вебхук»?** URL вебхука подставляется **при сборке в CI**. В настройках репозитория GitHub: **Settings** → **Secrets and variables** → **Actions** — добавьте секреты `PUBLIC_CONTACT_WEBHOOK` и при необходимости `SITE` (например `https://vladexecute.ru`). Следующий push пересоберёт образ в CI с этими значениями.

4. **Кэш браузера.** Сделайте жёсткое обновление: Ctrl+Shift+R (или Cmd+Shift+R). Или откройте сайт в режиме инкогнито.

5. **Кэш nginx на хосте.** Если в конфиге nginx есть `proxy_cache`, временно отключите или сбросьте кэш и перезагрузите nginx.

---

## Краткий чеклист

- [ ] Арендован VPS (1 vCPU, 1 GB RAM, Ubuntu 22.04)
- [ ] Установлены Docker (и при необходимости nginx + certbot)
- [ ] DNS: A-записи @ и www → IP VPS
- [ ] Сборка с `SITE=https://vladexecute.ru`, образ загружен на сервер, контейнер запущен
- [ ] Настроены HTTPS и редирект с HTTP на HTTPS
- [ ] (Опционально) Настроен автодеплой через GitHub Actions

После этого сайт доступен по **https://vladexecute.ru** и готов к использованию.
