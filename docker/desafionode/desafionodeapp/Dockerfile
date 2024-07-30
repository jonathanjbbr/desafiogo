FROM --platform=linux/arm64 node:22-slim

WORKDIR /usr/src/app

ARG UID=1000
ARG GID=1000

RUN groupmod -g "${GID}" node && usermod -u "${UID}" -g "${GID}" node 
   #mkdir -p /node_modules && chown node:node -R /node_modules /app

USER node

EXPOSE 3000
