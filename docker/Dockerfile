# Сборка Astro (Node 20)
FROM node:20-alpine AS builder
WORKDIR /app
ARG PUBLIC_CONTACT_WEBHOOK
ENV SITE=https://vladexecute.ru
ENV NODE_ENV=production
ENV PUBLIC_CONTACT_WEBHOOK=${PUBLIC_CONTACT_WEBHOOK}

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Продакшен: nginx раздаёт статику из dist
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
RUN echo 'server { root /usr/share/nginx/html; location / { try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
