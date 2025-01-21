const express = require('express');
const fs = require('fs').promises;

const app = express();

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      throw new Error('This is the list of our students\nCannot load the database');
    }

    const students = lines.slice(1);

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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const database = process.argv[2];
    const studentsData = await countStudents(database);
    res.end(`This is the list of our students\n${studentsData}`);
  } catch (error) {
    res.end('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245);

module.exports = app;
