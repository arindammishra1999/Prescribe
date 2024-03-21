# database/Dockerfile
FROM postgres:16.2 AS base

COPY init.sql /docker-entrypoint-initdb.d/

FROM base AS development

COPY seed.sql /docker-entrypoint-initdb.d/
