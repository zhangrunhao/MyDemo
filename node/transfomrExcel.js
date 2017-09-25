
// import xlsx from 'node-xlsx'
const xlsx = require('node-xlsx')

const fs = require('fs')

const res = xlsx.parse(fs.readFileSync('./评价体系.xlsx'));

const obj = new Object

let data = res[0].data

data.splice(0, 3)

let k = 1
data.forEach((element, index) => {
  element.splice(0, 2)
  if (index % 5 === 0) {
    element.push(k++)
  }

  for (let i = 0; i < element.length; i++) {
    if (typeof element[i] === 'number') {
      element[i] = Math.ceil(element[i])
    }
  }
})

obj.group = data

console.log(obj)



