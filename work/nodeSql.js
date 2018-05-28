var mysql = require('mysql')
// console.log(mysql)

var connection = mysql.createConnection({
  host: '123.206.8.216',
  port: 3306,
  user: 'tibaiwan_com',
  password: 'eDYkp5mMFE',
  database: 'tibaiwan_com'
})

connection.connect((err) => {
  console.log(err)
})