// entry.js
//require("!style-loader!css-loader!./style.css") // 载入 style.css
require('./style.css')
document.write('It works.')
document.write(require('./module.js')) // 添加模块

// 添加一行 测试代码
var str = "this is a str"

console.log(str)

alert(str)