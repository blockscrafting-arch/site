# Сборка статики Astro (PUBLIC_* и SITE подставляются в код при сборке)
FROM node:20-alpine AS builder
WORKDIR /app
# Передай при сборке: --build-arg PUBLIC_CONTACT_WEBHOOK=... или через docker-compose
ARG PUBLIC_CONTACT_WEBHOOK
ARG SITE
ENV PUBLIC_CONTACT_WEBHOOK=${PUBLIC_CONTACT_WEBHOOK}
ENV SITE=${SITE}
COPY package.json package-lock.json* ./
RUN npm ci
COPY . .
RUN npm run build

# Продакшн: nginx с Brotli-сжатием
FROM fholzer/nginx-brotli:latest
COPY --from=builder /app/dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT []
CMD ["nginx", "-g", "daemon off;"]
