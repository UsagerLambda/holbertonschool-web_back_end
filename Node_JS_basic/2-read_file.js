const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.trim().split('\n');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

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

    console.log(`Number of students in CS: ${
      csStudents.length}. List: ${csStudents.join(', ')}`);

    students.forEach((student) => {
      const studentData = student.split(',');
      const field = studentData[3];
      if (field === 'SWE') {
        sweStudents.push(studentData[0]);
      }
    });

    console.log(`Number of students in SWE: ${
      sweStudents.length}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
