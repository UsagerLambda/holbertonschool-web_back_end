const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2] || '';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students');
    countStudents(databasePath);
  }
  res.end();
}).listen(1245);

module.exports = app;
