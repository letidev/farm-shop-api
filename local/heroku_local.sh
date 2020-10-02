#!/bin/bash
# Start the server locally by:
# - getting the environment variables from the heroku dev app to replicate the env
# - running any migrations
# - starting the server on local port 4000 in watch/debug mode (specified in Procfile.local)
rm -f local/.env.local
heroku config:get -a farm-shop-api DATABASE_URL -s >> local/.env.local;
heroku local -e local/.env.local -f local/Procfile.local web -p 4000