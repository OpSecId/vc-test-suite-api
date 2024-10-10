ARG NODE_VERSION=18.0.0
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

USER node

COPY . .

EXPOSE 8000

CMD node src/index.js