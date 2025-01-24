FROM node:22.11.0-slim AS frontend

WORKDIR /app

COPY apps/frontend/package.json apps/frontend/package-lock.json ./
RUN npm install

COPY apps/frontend .

RUN npm run build



FROM nginx:1.27-alpine

COPY --from=frontend /app/dist /usr/share/nginx/html/frontend
COPY ci/production/nginx/build/conf.d /etc/nginx/conf.d
