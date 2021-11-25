var mysql = require('mysql');
var db_info = {
    user: 'root',
    password: '1q2w3e4r5t',
    database: 'company'
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}