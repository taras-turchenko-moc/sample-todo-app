FROM node:20.18.0-slim AS builder-frontend

WORKDIR /builder

COPY ./apps/frontend/package.json ./apps/frontend/package-lock.json ./
RUN npm install

COPY ./apps/frontend .

ARG API_URL
ENV VITE_PUBLIC_API_URL=$API_URL
RUN npm run build


FROM nginx:1.27-alpine

WORKDIR /etc/nginx

COPY ./ci/production/build/nginx/conf.d ./conf.d
COPY --from=builder-frontend /builder/dist ./static/frontend
