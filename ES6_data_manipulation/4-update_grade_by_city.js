export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  // pour student.location égal à location dans listStudents
  return listStudents.filter((student) => student.location === city)
    .map((student) => {
      // trouve les newGrades correspondant aux id des étudiants
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      // si gradeObj existe grade: gradeObj sinon gradeObj.grade : N/A
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
