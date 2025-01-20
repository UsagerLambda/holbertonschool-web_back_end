async function countStudents(path) {
  return new Promise((resolve, reject) => {
    const fs = require('fs');
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1);

      process.stdout.write(`Number of students: ${students.length}\n`);

      const csStudents = [];
      const sweStudents = [];

      students.forEach((student) => {
        const studentData = student.split(','); // split les données par la virgule
        const field = studentData[3]; // Colonne field
        if (field == 'CS') {
          // ajoute l'étudiant correspondant à la liste
          csStudents.push(studentData[0]);
        }
      });

      process.stdout.write(`Number of students in CS: ${
        csStudents.length}. List: ${csStudents.join(', ')}\n`);

      students.forEach((student) => {
        const studentData = student.split(',');
        const field = studentData[3];
        if (field == 'SWE') {
          sweStudents.push(studentData[0]);
        }
      });

      process.stdout.write(`Number of students in CS: ${
        sweStudents.length}. List: ${sweStudents.join(', ')}\n`);
      resolve();
    });
  });
}

  module.exports = countStudents;
