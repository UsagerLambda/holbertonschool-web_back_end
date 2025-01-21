const http = require('http');
const fs = require('fs').promises;

const databasePath = process.argv[2];

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      return 'Number of students: 0';
    }

    const students = lines.slice(1).filter((line) => line.trim());

    const csStudents = [];
    const sweStudents = [];

    students.forEach((student) => {
      const studentData = student.split(',');
      const field = studentData[3].trim();
      if (field === 'CS') {
        csStudents.push(studentData[0].trim());
      } else if (field === 'SWE') {
        sweStudents.push(studentData[0].trim());
      }
    });

    return [
      `Number of students: ${students.length}`,
      `Number of students in CS: ${
        csStudents.length}. List: ${csStudents.join(', ')}`,
      `Number of students in SWE: ${
        sweStudents.length}. List: ${sweStudents.join(', ')}`,
    ].join('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(databasePath)
      .then((output) => {
        res.end(`This is the list of our students\n${output}`);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
