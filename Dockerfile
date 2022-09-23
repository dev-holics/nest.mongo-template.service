FROM node:lts-alpine
LABEL maintainer="minhduc0589@gmail.com"

WORKDIR /app
EXPOSE 3000

COPY package.json yarn.lock ./
RUN touch .env

RUN set -x && yarn
RUN yarn global add @nestjs/cli

COPY . .

CMD [ "yarn", "start:dev" ]