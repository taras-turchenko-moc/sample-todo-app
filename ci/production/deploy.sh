#!/usr/bin/env bash

set -e

CR_PORT=32770

docker build -t localhost:$CR_PORT/sample-todo-app-nginx-prod:latest -f ci/production/nginx/build/Dockerfile .
docker build -t localhost:$CR_PORT/sample-todo-app-backend-prod:latest -f ci/production/backend/build/Dockerfile ./apps/backend

docker push localhost:$CR_PORT/sample-todo-app-nginx-prod:latest
docker push localhost:$CR_PORT/sample-todo-app-backend-prod:latest

kubectl -n backend delete job/backend-deploy --ignore-not-found
kubectl apply -f ci/production/backend/job-deploy.yaml
kubectl -n backend wait --for=condition=complete --timeout=600s job/backend-deploy

kubectl -n nginx rollout restart deploy nginx
kubectl -n backend rollout restart deploy backend
