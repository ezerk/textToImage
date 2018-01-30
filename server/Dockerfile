FROM node:8

RUN apt-get update \
    && apt-get install -qq libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential g++

RUN mkdir -p /opt/node/js \
    && cd /opt/node \
    && npm i canvas@next

WORKDIR /opt/node/js
COPY . .
RUN npm i
EXPOSE 3000
CMD [ "npm", "start" ]

TAG image-server

