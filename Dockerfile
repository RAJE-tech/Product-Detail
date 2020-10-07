FROM node:13.12.0-alpine

RUN mkdir -p /src/product_detail

WORKDIR /src/product_detail

COPY . /src/product_detail

RUN npm install

EXPOSE 3001

CMD [ "npm", "start" ]