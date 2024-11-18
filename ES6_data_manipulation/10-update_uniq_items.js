export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // pour clé/valeur dans map si value == 1 / set value to 1
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
