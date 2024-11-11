export default function appendToEachArrayValue(array, appendString) {
    for (var idx in array) {
      let value = array[idx];
      array[idx] = appendString + value;
    }
  
    return array;
  }
