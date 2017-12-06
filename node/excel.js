
var xlsx = require('node-xlsx');
const fs = require('fs')
const path = require('path')

const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`./myFile.xlsx`));

const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];

var buffer = xlsx.build([{name: "mySheetName", data: data}]); // Returns a buffer


fs.writeFile('./testFile.xlsx', buffer, (err) => {
  if(err) {
    console.error(err)
  }else {
    console.log('写入成功')
  }
})

console.log(buffer)
// // Parse a file
// const workSheetsFromFile = xlsx.parse(`${__dirname}/myFile.xlsx`);