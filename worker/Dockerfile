FROM node:16-alpine

WORKDIR /worker

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./

COPY worker/src/ ./src/

WORKDIR /worker/src
RUN npx tsc

WORKDIR /worker
CMD ["node", "worker.js"]
