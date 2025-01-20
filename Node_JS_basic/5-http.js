const app = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2] || '';

app.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students');
    countStudents(databasePath);
  }
  res.end();
}).listen(1245);
