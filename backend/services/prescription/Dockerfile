# backend/services/prescription/Dockerfile
FROM node:20.11.1 AS base

WORKDIR /app

COPY package.json ./

RUN npm install

FROM base AS production

COPY . .
