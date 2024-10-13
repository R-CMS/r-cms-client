FROM node:14
LABEL authors="sungwon choi"

WORKDIR /app
COPY package.json .

RUN npm install
RUN npm run build --production
RUN npm install -g serve

COPY /build .

EXPOSE 3000

CMD ["serve", "-l", "3000"]