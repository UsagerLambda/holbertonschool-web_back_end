import fs from 'fs/promises';

const readDatabase = (filePath) => fs.readFile(filePath, 'utf8') // Lire le fichier CSV
  .then((data) => {
    // sépare les données en lignes et enlève les espaces inutiles
    const lines = data.trim().split('\n');
    // Exclut la première ligne et filtre les lignes vides
    const students = lines.slice(1).filter((line) => line.length > 0);
    const fields = {};

    students.forEach((student) => { // pour chaque étudiant dans students
      const [firstname, , , field] = student.split(','); // récupère le prénom et le domaine
      if (!fields[field]) { // si le domaine n'existe pas dans fields
        fields[field] = []; // crée une liste vide du nom du field trouvé
      }
      fields[field].push(firstname); // sinon ajoute le prénom dans le champ ou il correspond
    });

    return fields; // retourne
  })
  .catch(() => {
    throw new Error('Cannot load the database');
  });

export default readDatabase;
