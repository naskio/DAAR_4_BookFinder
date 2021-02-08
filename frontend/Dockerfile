# build
FROM node:12.18.3-alpine as build
ARG SPACE_SIZE=8192
ENV NODE_OPTIONS="--max-old-space-size=${SPACE_SIZE}"
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json ./yarn.lock /app/
RUN yarn install --silent
COPY . /app/
RUN yarn run build

# serve static site
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY .nginx_conf /etc/nginx/conf.d/default.conf
