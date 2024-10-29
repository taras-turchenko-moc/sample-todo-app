#!/usr/bin/env bash

REGISTRY_HOST=localhost:32790

docker build \
  -t $REGISTRY_HOST/sample-todo-app-nginx:latest \
  -f ./ci/production/build/nginx/Dockerfile \
  --build-arg API_URL=/api .

docker push $REGISTRY_HOST/sample-todo-app-nginx:latest

docker build \
  -t $REGISTRY_HOST/sample-todo-app-backend:latest \
  -f ./ci/production/build/backend/Dockerfile ./apps/backend

docker push $REGISTRY_HOST/sample-todo-app-backend:latest
