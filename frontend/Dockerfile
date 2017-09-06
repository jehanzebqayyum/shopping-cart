FROM node:latest

RUN mkdir -p /tmp/shopping-cart/frontend

WORKDIR /tmp/shopping-cart/frontend

COPY package.json /tmp/shopping-cart/frontend

RUN npm install

COPY . /tmp/shopping-cart/frontend

EXPOSE 4200

CMD ["npm", "start"]




