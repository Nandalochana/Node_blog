#base image full

FROM node:20-alpine
#working directory

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm","start"]

