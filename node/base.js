const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/javascript;charset=UTF-8');
  res.end('感谢人民， 感谢政府， 感谢梦迪， 能够找出一点时间把服务器搞通了。。。\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});