export default function getStudentsByLocation(listStudents) {
  // sum est la variable qui seras retourner
  // pour sum et student dans ListStudents, sum + student.id
  return listStudents.reduce((sum, student) => sum + student.id, 0);
}
