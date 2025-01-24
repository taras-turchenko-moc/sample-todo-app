FROM node:22.11.0-slim

WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm install

COPY . .
