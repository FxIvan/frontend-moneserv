FROM node:alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine AS prod-stage

COPY --from=build /app/build /usr/nginx/share/nginx/html

EXPOSE 80

CMD ["nginx","-p","deamon off;"]
