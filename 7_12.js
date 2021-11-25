//모듈 추출
var http = require('http');
var jade = require('jade');
var fs = require('fs');

//서버 생성 실행
http.createServer(function (request, response) {
    //jadePage.jade파일을 읽습니다.
    fs.readFile('jadePage.jade','utf8',function (error, data) {
        var fn = jade.compile(data);

        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(fn({
            name: 'RintIanTta',
            description: 'Hello ejs With Node.js'
        }));
    });
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});