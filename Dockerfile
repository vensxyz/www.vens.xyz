# use node 10.15.3
FROM node:10.16.0

# Create a new user
RUN useradd -ms /bin/bash vensxyz

# change working dir to app dir
RUN mkdir -p /home/vensxyz/app/node_modules
RUN chown -R vensxyz:vensxyz /home/vensxyz/app

USER vensxyz
WORKDIR /home/vensxyz/app

COPY package*.json ./
RUN npm install

# OPTION A) Copy all files/folders, remove db.sqlite
# COPY --chown=wwwvensxyz:wwwvensxyz . .
# RUN rm *.sqlite

# OPTION B) Copy required files only
COPY --chown=vensxyz:vensxyz ./src /home/vensxyz/app/src
COPY --chown=vensxyz:vensxyz ./.env /home/vensxyz/app/.env
COPY --chown=vensxyz:vensxyz ./tsconfig.json /home/vensxyz/app/tsconfig.json

# get build args
ARG server_debug
ARG server_port
ARG bodyparser_json_limit
ARG bot_token
ARG bot_admin

# envirnment variables
ENV SERVER_DEBUG=$server_debug
ENV SERVER_PORT=$server_port
ENV BODYPARSER_JSON_LIMIT=$bodyparser_json_limit
ENV BOT_TOKEN=$bot_token
ENV BOT_ADMIN=$bot_admin

# build project
RUN npm run build

# expose port
EXPOSE $server_port

# launch
CMD ["node", "/home/vensxyz/app/dist/index.js"]