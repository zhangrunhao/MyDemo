// 引入mysql模块
var mysql = require('mysql')
    // console.log(mysql)
    // 建立连接数据库的对象
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'my_db'
})  

// 连接数据库
connection.connect(function(err) {
    if (err) throw err;
    console.log('connecting database success...')

})

// 执行查询语句
connection.query('select * fro m user', function(err, rows, fields) {
    if (err) throw err;
    console.log(rows);
})