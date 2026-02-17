---
title: "Продление SSL (Let's Encrypt)"
description: "Как продлевать сертификат и что делать, если истёк."
order: 11
category: setup
---

Let's Encrypt выдаёт бесплатные сертификаты на 90 дней. Продление обычно настраивается автоматически.

## Проверка автопродления

На сервере с установленным certbot (apt или snap):

```bash
sudo systemctl status certbot.timer
# или, если certbot установлен через snap:
# sudo systemctl status snap.certbot.renew.timer
```

Если таймер активен, сертификаты продлеваются сами. Проверить вручную:

```bash
sudo certbot renew --dry-run
```

## Ручное продление

Если таймер не настроен или нужно обновить сейчас:

```bash
sudo certbot renew
sudo systemctl reload nginx
```

## Сертификат истёк — что делать

1. Продлить: `sudo certbot renew`.
2. Перезагрузить nginx: `sudo systemctl reload nginx`.
3. Если certbot ругается на домен или порты — убедитесь, что nginx слушает 80 и домен указывает на этот сервер. Временно остановите контейнеры, занимающие порт 80, если они мешают проверке.

## Несколько доменов

Certbot хранит конфиги в `/etc/letsencrypt/live/`. Для каждого домена — своя папка. Команда `certbot renew` продлевает все выданные сертификаты.
