FROM node:12-slim

WORKDIR /app

COPY . /app

RUN npm install
EXPOSE 3000

CMD [ "npm", "start" ]

## Build & Run
# $ docker build -t expriment-no-lib .
# $ docker run -it -p 3000:3000 expriment-no-lib