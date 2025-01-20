const express = require('express');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2] || '';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.send('This is the list of our students');
  countStudents(databasePath);
});

app.listen(1245);
