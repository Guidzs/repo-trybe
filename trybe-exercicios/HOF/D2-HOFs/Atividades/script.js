let names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toLowerCase();
};

names.forEach(convertToUpperCase);
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]



const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  // console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui
emailListInData.forEach(showEmailList)


const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0)

// console.log(findDivisibleBy3And5)


names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((name) => name.length === 5)

// console.log(findNameWithFiveLetters);


const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = (id) => {
  // Adicione seu código aqui
  return musicas.find((musica) => musica.id === id).title;
}

// console.log(findMusic('31031685'))


names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((nam) => nam === name)
}

// console.log(hasName(names, 'Ana'))


const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every((pessoa) => pessoa.age >= minimumAge)
}

// console.log(verifyAges(people, 18));


// Adicione se código aqui

const ordena = (a, b,) => a.age - b.age
// const ordena = (a, b,) => b.age - a.age 

console.log(people);
console.log(people.sort(ordena));
