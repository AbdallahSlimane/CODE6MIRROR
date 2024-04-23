FROM node:16-alpine

WORKDIR /server

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./

COPY server/src/ ./src/

WORKDIR /server/src
RUN npx tsc

WORKDIR /server
CMD ["node", "server.js"]
