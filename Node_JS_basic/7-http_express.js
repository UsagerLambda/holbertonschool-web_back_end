const express = require('express');
const fs = require('fs').promises;

const app = express();
const databasePath = process.argv[2];

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const lines = data.trim().split('\n');
    const students = lines.slice(1).filter((line) => line);

    const csStudents = [];
    const sweStudents = [];

    students.forEach((student) => {
      const studentData = student.split(','); // split les données par la virgule
      const field = studentData[3]; // Colonne field
      if (field === 'CS') {
        // ajoute l'étudiant correspondant à la liste
        csStudents.push(studentData[0]);
      }
    });

    students.forEach((student) => {
      const studentData = student.split(',');
      const field = studentData[3];
      if (field === 'SWE') {
        sweStudents.push(studentData[0]);
      }
    });

    return {
      totalStudents: students.length,
      csStudents,
      sweStudents,
    };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(databasePath)
    .then((studentData) => {
      const output = [
        'This is the list of our students',
        `Number of students: ${studentData.totalStudents}`,
        `Number of students in CS: ${studentData.csStudents.length}. List: ${studentData.csStudents.join(', ')}`,
        `Number of students in SWE: ${studentData.sweStudents.length}. List: ${studentData.sweStudents.join(', ')}`,
      ].join('\n');
      res.send(output);
    })
    .catch((error) => {
      res.status(404).send(error.message);
    });
});

app.listen(1245);

module.exports = app;
