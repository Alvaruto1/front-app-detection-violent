FROM node:16.14.2


WORKDIR /app
ADD package.json /app/
ADD package-lock.json /app/

RUN npm install
RUN npm install --save react-json-view
