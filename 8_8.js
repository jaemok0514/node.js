var http = require('http');
var express = require('express');

var app = express();

app.use(function (request, response, next) {
    console.log('첫 번째 미들웨어');
    next();
});

app.use(function (request, response, next) {
    console.log('두 번째 미들웨어');
    next();
});

app.use(function (request, response, next) {
    console.log('세 번째 미들웨어');
    response.writeHead(200, { 'Content-Type':'text/html' });
    response.end('<h1>express Basic</h1>');
});

http.createServer(app).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});
