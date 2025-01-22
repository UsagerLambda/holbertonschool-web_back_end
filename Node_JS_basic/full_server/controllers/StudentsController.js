import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2]) // appel de la fonction readDatabase
      .then((fields) => { // récupère la liste
        const output = ['This is the list of our students'];
        // trie la liste
        const sortedFields = Object.keys(
          fields,
        ).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        // ajoute au tableau output de nouvelles lignes
        // avec les données des domaines listé dans fields
        for (const field of sortedFields) {
          output.push(
            `Number of students in ${
              field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
          );
        }

        response.status(200).send(output.join('\n'));
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params; // récupère le paramètre 'major' de l'url (index.js)

    if (major !== 'CS' && major !== 'SWE') { // si le paramètre ne correspond pas à CS ou SWE
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2]) // appel de la fonction readDatabase
      .then((fields) => {
        if (fields[major]) { // si le fields CS ou SWE existe
          response.status(200).send(`List: ${fields[major].join(', ')}`);
        } else { // sinon
          response.status(500).send('Major not found');
        }
      })
      .catch((error) => {
        response.status(500).send(error.message);
      });
  }
}

export default StudentsController;
