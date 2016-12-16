FROM mhart/alpine-node:6

ADD . /webapp

WORKDIR ./webapp

RUN npm install -g yarn \
    && cd /webapp \
    && yarn install \
    && yarn build \
    && npm uninstall -g npm

EXPOSE 3000
CMD ["yarn", "start"]
