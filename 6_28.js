//모듈 추출
var http = require('http');

//모듈 사용
http.createServer(function (request, response) {
    
    //쿠키 추출 분해
    var cookie = request.headers.cookie;
    cookie = cookie.split(';').map(function (element) {
        var element = element.split('=');
        return {
            key : element[0],
            value : element[1]
        };
    });

    //쿠키 생성
    response.writeHead(200, {
        'Content-Type' : 'text/html',
        'Set-Cookie' : ['name = RintIanTta', 'region = Seoul']
    });

    //응답
    response.end('<h1>' + JSON.stringify(cookie) + '</h1>');

}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});