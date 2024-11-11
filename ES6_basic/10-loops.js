export default function appendToEachArrayValue(array, appendString) {
    const list = []
    // pour value dans array
    for (let value of array) {
        // écrit dans "list" le résultat de appendString + value
      list.push(appendString + value);
    }
    // retourne la list
    return list;
  }
