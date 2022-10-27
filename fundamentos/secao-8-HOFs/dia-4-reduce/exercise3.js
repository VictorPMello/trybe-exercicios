const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

//! Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const containsA = () => {
  let count = 0;
  names.forEach((name) => {
    const split = name.split('');
    count += split.reduce((acc, letter) => {
      if (letter === 'a' || letter === 'A') {
        return acc + 1;
      }
      return acc;
    }, 0);
  });

  return count;
};
console.log(containsA());
