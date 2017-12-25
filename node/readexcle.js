var xlsx = require('node-xlsx');
var fs = require('fs');
//读取文件内容
var obj = xlsx.parse('./data.xlsx');

var excelObj=obj[0].data;

console.log(excelObj);