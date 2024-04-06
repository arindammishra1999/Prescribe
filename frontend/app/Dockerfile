# frontend/Dockerfile
FROM node:20.11.1 AS base

WORKDIR /app

FROM base AS production

COPY . .

RUN npm install

RUN npm run build
