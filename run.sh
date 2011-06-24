#!/bin/sh
PORT=8080

if [ $1 ]; then
    PORT=$1
fi

/usr/local/bin/node server/server.js $PORT

