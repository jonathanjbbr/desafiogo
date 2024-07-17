FROM --platform=linux/arm64 node:22
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

ENV DOCKERIZE_VERSION v0.7.0
RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-arm64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*
    
EXPOSE 3000
CMD [ "node", "index.js" ]



#FROM php:7.4-fpm-alpine
#WORKDIR /var/www
#RUN rm -rf /var/www/html
#COPY --from=build /var/www/laravel .
#RUN ln -s public html
#RUN chown -R www-data:www-data /var/www
#EXPOSE 3000
#CMD ["php-fpm"]
