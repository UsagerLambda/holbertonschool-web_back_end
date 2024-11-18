export default function cleanSet(set, startString) {
  // si startString n'est pas une string ou est vide
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  // convertit set en array
  const result = Array.from(set)
    // filtre les chaines qui commence par la valeur de la chaine startString
    .filter((value) => value.startsWith(startString))
    // retire le prefixe (startString) de la chaine pointé (value)
    .map((value) => value.slice(startString.length))
    // combine les chaines en une seule séparé par "-"
    .join('-');

  return result;
}
