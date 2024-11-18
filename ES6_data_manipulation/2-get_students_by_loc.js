export default function getStudentsByLocation(listStudents, location) {
  // pour student dans listStudent et student.location égal à location
  return listStudents.filter((student) => student.location === location);
}
