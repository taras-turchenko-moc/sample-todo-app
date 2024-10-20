#!/usr/bin/env bash

set -e

kubectl -n app delete --ignore-not-found job backend-deploy-job
kubectl apply -f ./ci/production/k8s/app/backend-deploy-job.yaml
kubectl -n app wait --for=condition=complete --timeout=600s job/backend-deploy-job
echo "Backend deployment completed"
echo ""

kubectl -n app set image deployment/nginx nginx=localhost:5000/sample-todo-app-nginx:latest
kubectl -n app set image deployment/backend backend=localhost:5000/sample-todo-app-backend:latest

echo "Waiting for rollout to finish"
echo ""

kubectl -n app rollout restart deployment/nginx
kubectl -n app rollout restart deployment/backend

echo ""

kubectl -n app rollout status deployment/nginx
kubectl -n app rollout status deployment/backend

echo "Deployment completed"
