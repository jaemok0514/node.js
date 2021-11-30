var mysql = require('mysql');

var client = mysql.createConnection({
    Host : 'localhost',
    user : 'root',
    password : '1q2w3e4r5t',
    database : 'company'
});

client.connect();

client.query('select * from products',function(error, result, fields) {
    if(error) {
        console.log('쿼리 문장에 오류가 있습니다');
    } else {
        console.log(result);
    }
});