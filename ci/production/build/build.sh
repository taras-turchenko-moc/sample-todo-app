#!/usr/bin/env bash

docker build \
  -t localhost:32780/sample-todo-app-nginx:latest \
  -f ./ci/production/build/nginx/Dockerfile \
  --build-arg API_URL=/api .

docker push localhost:32780/sample-todo-app-nginx:latest

docker build \
  -t localhost:32780/sample-todo-app-backend:latest \
  -f ./ci/production/build/backend/Dockerfile ./apps/backend

docker push localhost:32780/sample-todo-app-backend:latest
