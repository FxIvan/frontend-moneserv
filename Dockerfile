FROM node:alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine AS prod-stage

COPY --from=build /app/build /var/www/html

EXPOSE 3000
CMD ["npm","start"]
