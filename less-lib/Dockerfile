FROM alpine:latest
RUN apk add --no-cache nodejs npm
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]

## Build & Run
# $ docker build -t expriment-less-lib .
# $ docker run -it -p 3000:3000 expriment-less-lib