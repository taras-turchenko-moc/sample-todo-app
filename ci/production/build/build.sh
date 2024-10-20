#!/usr/bin/env bash

docker build \
  -t sample-todo-app-nginx \
  -f ./ci/production/build/nginx/Dockerfile \
  --build-arg API_URL=/api .

minikube image load sample-todo-app-nginx
