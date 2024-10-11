FROM node:18

WORKDIR /app

COPY package.json ./

RUN npm i

COPY src/ ./src

CMD node src/index.js