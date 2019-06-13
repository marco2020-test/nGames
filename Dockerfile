# This file is a template, and might need editing before it works on your project.
FROM node:10.6-alpine

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .

CMD [ "npm", "start" ]
