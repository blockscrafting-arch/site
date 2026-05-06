# Changelog

## 2026-05-06

- Fixed the nginx ACME challenge route for `vladexecute.ru` so Certbot webroot renewal can serve `/.well-known/acme-challenge/` from `/var/www/certbot` before the HTTP redirect.
- Documented the nginx reload hook needed after certificate renewal.
