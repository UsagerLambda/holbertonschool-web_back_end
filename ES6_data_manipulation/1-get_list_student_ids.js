export default function getListStudentIds(object) {
  if (!Array.isArray(object)) {
    return [];
  }
  // map crée un tableau avec chaque éléments "id" du tableau object
  return object.map((student) => student.id);
}
