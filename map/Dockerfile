FROM mhart/alpine-node

WORKDIR /usr/src/app

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3200

CMD ["yarn", "start"]