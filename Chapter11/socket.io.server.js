var http = require('http');
var fs = require('fs');
var socketio = require('socket.io')



var server = http.createServer(function (request, response){
    fs.readFile('HTMLPage.html',function(error, data){
        response.writeHead(200, {'Content-Type' : 'text/html' });
        response.end(data);
    });
}).listen(52273, function(){
    console.log('Server running at http://127.0.0.1:52273');
});

var io = socketio(server);
io.on('connection', function(socket) {
    socket.on('rint',(data) => {
        console.log('Client Send Data:', data);

        socket.emit('smart', data);
    });
});