var http = require('http');
var express = require('express');

var app = express();

app.get('/index', function (request, response) {
    response.send('<h1>Index Page</h1>');
});

app.all('*',function (request, response) {
    response.send(404, '<h1>ERROR - Page Not Found</h1>');
});

http.createServer(app).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273');
});