FROM node:18-alpine as build
WORKDIR /app
COPY Frontend/task/package.json ./
RUN npm install
COPY . .
RUN npm run build
