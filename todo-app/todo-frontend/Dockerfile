FROM node:24 AS test

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm run test:run


FROM node:24 AS build-stage

WORKDIR /usr/src/app

COPY --from=test /usr/src/app .

RUN npm run build


FROM nginx:1.29-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html