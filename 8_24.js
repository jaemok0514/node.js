var fs = require('fs');
var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',function(request, response) {
    if(request.cookies.auth) {
        response.send('<h1>Login Success</h1>');
    } else {
        response.redirect('/login');
    }
});
app.get('/login', function(request, response) {
    fs.readFile('login.html', function(error,data) {
        response.send(data.toString());
    }); 
});
app.post('/login', function(request, response) {
    var login = request.body.login;
    var password = request.body.password;

    console.log(login, password);
    console.log(request.body);

    if (login == 'rint' && password == '1234') {
        response.cookie('auth',true);
        response.redirect('/');
    } else {
        response.redirect('/login');
    }
});

http.createServer(app).listen(52273, function() {
    console.log('Server running at http://127.0.0.1:52273');
});