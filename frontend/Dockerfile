FROM node:20.11.1 AS base

WORKDIR /app

COPY app/package.json ./

RUN npm install

FROM base AS production

COPY . .

RUN npm run build
