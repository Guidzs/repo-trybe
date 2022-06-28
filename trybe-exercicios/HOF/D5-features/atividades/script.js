// Faça uma lista com as suas frutas favoritas
const specialFruit = ['lichia', 'pessego', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condesado', 'suco de laranja', 'suco de maçã'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

// console.log(fruitSalad(specialFruit, additionalItens));

function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

// console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.


// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);



const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfos = {
  ...user,
  ...jobInfos,
};

const apresentation = ({ name, age, nationality, profession, squad, squadInitials}) => `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`


// console.log(apresentation(userInfos));


const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao, funcao] = saudacoes

// funcao(saudacao)


let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
// console.log(comida, animal, bebida); 
[comida, animal, bebida] = [bebida, comida, animal]
// console.log(comida, animal, bebida); 

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares

// console.log(numerosPares);


const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,});

// console.log(getPosition(-19.8157, -43.9542));

const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

// greeting(); // // Welcome usuário!
// greeting('guidz');


const multiply = (number, value = 1) => number * value;

console.log(multiply(8));
console.log(multiply(8, 2));
