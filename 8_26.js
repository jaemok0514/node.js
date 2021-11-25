var fs = require('fs');
var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (request, response) {
    fs.readFile('HTMLPage.html', function(error, data) {
        response.send(data.toString());
    });
});

app.post('/', function(request, response) {
    console.log(request.body);
    console.log(request.files);

    response.redirect('/');
});

http.createServer(app).listen(52273, function() {
    console.log('Server running at http://127.0.0.1:52273');
});