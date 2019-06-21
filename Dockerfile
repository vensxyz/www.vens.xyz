# use node 10.15.3
FROM node:10.16.0

# Create a new user
RUN useradd -ms /bin/bash wwwvensxyz

# change working dir to app dir
RUN mkdir -p /home/wwwvensxyz/app/node_modules
RUN chown -R wwwvensxyz:wwwvensxyz /home/wwwvensxyz/app

USER wwwvensxyz
WORKDIR /home/wwwvensxyz/app

COPY package*.json ./
RUN npm install

# OPTION A) Copy all files/folders, remove db.sqlite
# COPY --chown=wwwvensxyz:wwwvensxyz . .
# RUN rm *.sqlite

# OPTION B) Copy required files only
COPY --chown=wwwvensxyz:wwwvensxyz ./src /home/wwwvensxyz/app/src
COPY --chown=wwwvensxyz:wwwvensxyz ./.env /home/wwwvensxyz/app/.env
COPY --chown=wwwvensxyz:wwwvensxyz ./ormconfig.json /home/wwwvensxyz/app/ormconfig.json
COPY --chown=wwwvensxyz:wwwvensxyz ./tsconfig.json /home/wwwvensxyz/app/tsconfig.json

# get build args
ARG app_port
ARG app_debug

# envirnment variables
ENV PORT=$app_port
ENV DEBUG=$app_debug

# build project
RUN npm run build

# expose port
EXPOSE $app_port

# launch
CMD ["node", "/home/wwwvensxyz/app/dist/index.js"]