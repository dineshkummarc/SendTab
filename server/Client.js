
var Client = function(socket){
    this.socket = socket;
    this.bindEvents();
};

Client.prototype = {
    init : function(){
        //send some initialisation data
        this.socket.emit('init', { hello: 'world' });
    },
    bindEvents : function(){
        this.socket.on('test-channel', function (data) {
            console.log(data);
        });
    }
};

exports = module.exports = Client;