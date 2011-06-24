#!/bin/sh
#install node

#install npm
which npm || (curl http://npmjs.org/install.sh | sudo sh)
#install node modules
npm install socket.io connect
