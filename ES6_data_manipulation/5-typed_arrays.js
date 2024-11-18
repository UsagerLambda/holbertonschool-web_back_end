export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  // alloue de la mémoire binaire brut de taille length
  const buffer = new ArrayBuffer(length);
  // Crée un dataView sur "buffer" ce qui permet l'accès et la modification
  const dataView = new DataView(buffer);
  // définit une "value" de type Int8 à "position" dans dataView
  dataView.setInt8(position, value);

  return dataView;
}
