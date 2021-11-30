var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({ secret : 'secret key',
                    resave: false,
                    saveUninitialized: true }));
app.use(function (request, response) {
    var output = {};
    output.cookies = request.cookies;
    output.session = request.session;

    request.session.now = (new Date()).toUTCString();

    response.send(output);
});

http.createServer(app).listen(52273, function() {
    console.log('Server running at http://127.0.0.1:52273');
});