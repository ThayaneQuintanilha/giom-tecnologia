FROM node:16-alpine

WORKDIR /app/web

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "serve"]