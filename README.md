# www.vens.xyz
A repo for the [vens.xyz](http://vens.xyz) website.

## Docker (production)

### Build docker image
Build the docker image from inside the directory root with:

```sh
$ docker build \
  --build-arg server_debug=0 \
  --build-arg server_port=3009 \
  --build-arg bodyparser_json_limit="1kb" \
  --build-arg bot_token="" \
  --build-arg bot_admin_id="" \
  -t wwwvensxyz .
```

> ### Note about `.env` variables
> The environment variables the system requires can be found inside the `example.env` file.  
If you are using docker the application will not use the `.env` file but rather the args passed to docker during the build step.

### Run the docker image
Run the previously built docker image:

```sh
$ docker run --name=wwwvensxyz --restart=always -p=3009:3009 -d -t wwwvensxyz
```