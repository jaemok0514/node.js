require('http').createServer(function (request,response) {
    if (request.url == '/') {
        // 응답합니다
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head>');
        response.write('    <title>Forever</title>');
        response.write('</head>');
        response.write('<body>');
        response.write('    <h1>Forever</h1>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    } else {
        error.error.error();
    }
}).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});