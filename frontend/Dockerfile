FROM node:18 AS development-stage

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g @angular/cli@19.0.0

EXPOSE 4200

CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]