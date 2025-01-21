const http = require('http');

// create a server object:
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
}).listen(1245); // the server object listens on port 1245

module.exports = app;
