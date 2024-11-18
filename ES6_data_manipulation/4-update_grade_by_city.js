export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  // pour student.location égal à location dans listStudents
  return listStudents.filter((student) => student.location === city)
    .map((student) => {
      // trouve les newGrades correspondant aux id des étudiants
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      // si gradeObj n'est pas nULL
      if (gradeObj) {
        // retourne student avec le champ grade = gradeObj
        return { ...student, grade: gradeObj };
      }
      // si gradeObj est NULL (donc pas de correspondance grade.studentId avec student.id)
      return { ...student, grade: 'N/A' };
    });
}
