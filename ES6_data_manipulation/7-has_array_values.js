export default function hasValuesFromArray(set, array) {
  // pour value dans array check si set possède value
  return array.every((value) => set.has(value));
}
