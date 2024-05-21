FROM node:20.13.1

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

RUN npm run build

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]