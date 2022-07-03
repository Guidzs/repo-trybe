const btnCount = document.querySelector('#btn-count');
const h1Count = document.querySelector('#h1-count');
let clickCount = 0

btnCount.addEventListener('click', () => (clickCount += 1) (h1Count.innerHTML = clickCount))



// //Exercicios

// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }
// testingScope(true);


// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// oddsAndEvens.sort(( a, b) => a - b)

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);


// const fatorial = (num) => (num > 1) ? num * fatorial(num - 1) : 1
// console.log(fatorial(5));

