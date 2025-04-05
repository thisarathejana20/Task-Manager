FROM node:18-alpine AS build

WORKDIR /app

COPY Frontend/task/package*.json ./

RUN npm install

COPY Frontend/task/ ./

RUN npm run build
