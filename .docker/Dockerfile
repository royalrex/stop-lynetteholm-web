# Offical Docker Image for PHP
# https://hub.docker.com/_/php
FROM php:7.4-apache

# Set Current Directory
WORKDIR /var/www/html/

# Install dependencies
RUN apt-get clean && apt-get update && apt-get upgrade -y && apt-get install -y \
    git \
    libonig-dev \
    libpng-dev \
    libjpeg-dev \
    libmagickwand-dev \
    libxml2-dev \
    libzip-dev \
    unzip \
    zip \
    redis-server

RUN a2enmod rewrite

RUN docker-php-source extract && \
    pecl install redis && \
    pecl install xdebug && \
    pecl install imagick && \
    docker-php-ext-enable imagick && \
    docker-php-ext-enable redis && \
    docker-php-source delete

# PHP Extensions
RUN docker-php-ext-install \
    bcmath \
    ctype \
    json \
    gd \
    mbstring \
    pdo_mysql \
    fileinfo \
    tokenizer \
    xml \
    zip

# Install Composer from Official Docker Image
# https://hub.docker.com/_/composer
COPY --from=composer /usr/bin/composer /usr/bin/composer

COPY ./.docker/xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini

ADD . /var/www/html
RUN chown -R www-data:www-data \
  /var/www/html/cache \
  /var/www/html/tmp \
  /var/www/html/backup \
  /var/www/html/assets \
  /var/www/html/images \
  /var/www/html/logs \
  /var/www/html/system
