////  parte 1

const a = 0
const b = 3
const c = 5

// const adicao = a + b
// const subtracao = a - b
// const multiplicacao = a * b
// const divisao = a / b
// const modulo = a % b

//// parte 2

// if (a > b) {
//     console.log(a)
// } 
// else if (b > c) {
//     console.log(b)
// } 
// else {
//     console.log(c)
// }

//// parte 3 e 4

// if (a > 0) {
//     console.log("positive")
// } 
// else if (a < 0) {
//     console.log("negative")
// }
// else {
//     console.log("zero")
// }

//// parte 5

// let angulo1 = 30
// let angulo2 = 60
// let angulo3 = 90


// if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
//     console.log('Erro! esse não é um triângulo valido')
// }
// else if (angulo1 + angulo2 + angulo3 === 180) {
//     console.log(true)
// }
// else if (angulo1 + angulo2 + angulo3 !== 180) {
//     console.log(false)
// }

//// parte 6

// let peça = 'BiSpO'

// switch (peça.toLowerCase()) {

//     case 'peao': 
//     console.log("Frente e mata na diagonar");
//     break; 

//     case 'bispo': 
//     console.log("Diagonal");
//     break;

//     case 'cavalo':
//          console.log("Duas para horizontal ou vertical e uma para o lado");
//     break;

//     case 'torre': 
//     console.log("Verticar e horizontal");
//     break;

//     case 'rainha': 
//     console.log("Vertical, horizontal e diagonal");
//     break;

//     case 'rei': 
//     console.log("Uma casa para vertical, horizontal e diagonal");
//     break;
//     default:
//          console.log("Não é uma peça de xadrez, tente damas");
// };

//// parte 7

// let notaEmPorcentagem = -30;
// let notaEmLetra = "";

// if (notaEmPorcentagem >=90 && notaEmPorcentagem <= 100) {
//     notaEmLetra = "A"
// }
// else if (notaEmPorcentagem >= 80 && notaEmPorcentagem < 90) {
//     notaEmLetra = "B"
// }
// else if (notaEmPorcentagem >= 70 && notaEmPorcentagem < 80) {
//     notaEmLetra = "C"
// }
// else if (notaEmPorcentagem >= 60 && notaEmPorcentagem < 70) {
//     notaEmLetra = "D"
// }
// else if (notaEmPorcentagem >= 50 && notaEmPorcentagem < 60) {
//     notaEmLetra = "E"
// }
// else if (notaEmPorcentagem < 50 && notaEmPorcentagem >= 0) {
//     notaEmLetra = "f"
// } 
// else if (notaEmPorcentagem > 100 || notaEmPorcentagem < 0) {
//     console.log("Erro. Nota invalida!")
// }

// console.log(notaEmLetra)

//// parte 8

if ((a % 2) === 0 || (b % 2) === 0 || (c % 2) === 0) {
    console.log(true)
} 
else {
    console.log(false)
}