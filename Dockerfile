FROM node:16.14.2


WORKDIR /app
ADD package.json /app/
ADD package-lock.json /app/
RUN mkdir -p /app/node_modules
RUN chown -R node:node /app/node_modules

RUN npm install
RUN npm install --save react-json-view

#RUN chmod -R 777 /app/node_modules
