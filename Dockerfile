FROM node:alpine

WORKDIR /usr/app/final_back

COPY . .

RUN yarn install

EXPOSE 9000

CMD ["yarn", "start"]
