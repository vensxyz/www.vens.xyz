# www.vens.xyz
A repo for www.vens.xyz the website

## Docker

### Build docker image
To build the docker image, run from inside the project root  

```sh
$ docker build \
  --build-arg server_debug=0 \
  --build-arg server_port=3009 \
  --build-arg bodyparser_json_limit="1kb" \
  --build-arg bot_token="" \
  --build-arg bot_admin="" \
  -t wwwvensxyz .
```

### Run the docker image
To run the previously built docker image, run

```sh
$ docker run --name=wwwvensxyz --restart=always -p=3009:3009 -d -t wwwvensxyz
```