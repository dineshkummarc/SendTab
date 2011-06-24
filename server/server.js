var connect = require('connect');
var io      = require('socket.io');
var Client  = require('./Client.js');

var port = process.argv[2] || 8080;
var fsRoot = process.cwd();

//connect
var webServer = connect(
    connect.logger(),
    connect.static(fsRoot + '/client') //serve the web app
);
webServer.listen(port);

//socket.io
var ioServer = io.listen(webServer);
//configure the ioServer
ioServer.set('log level', 1);

//client connection management
var clients = [];

ioServer.sockets.on('connection', function (clientSocket) {
    //create a new Client
    var client = new Client(clientSocket);
    clients.push(client);

    client.init();
});