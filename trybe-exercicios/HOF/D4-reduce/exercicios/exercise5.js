const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const countA = names.map((name) => name
                .toLowerCase()
                .split('')
                .reduce((acc, curr) => (curr.charAt() === 'a') ? acc +1 : acc , 0))
                .reduce((acc, curr) => acc + curr);

console.log(countA);