var http = require('http');
var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/page/:id',function (request, response) {
    var name = request.param('id');
    
    response.send('<h1>' + name + 'page</h1>');
});

http.createServer(app).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});