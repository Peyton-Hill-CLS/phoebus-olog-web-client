#!/bin/bash

npm run build
docker compose build --no-cache --pull
docker compose up -d --no-deps --build web
docker compose restart
