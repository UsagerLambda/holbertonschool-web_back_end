export default function appendToEachArrayValue(array, appendString) {
    // pour value dans array
    for (let value of array) {
        // value égal "correctly-"" + "value" (attache les deux strings (correctly-value))
      value = appendString + value;
    }
    // retourne la liste modifiée
    return array;
  }
