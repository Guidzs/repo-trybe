// let number = 10;
// let fatorialNumber = 1;

// for (let index = 0; index < number; index += 1 ) {
//     fatorialNumber = fatorialNumber * (number - index)
// }
// console.log(fatorialNumber)

// let word = 'Otm oma et mbt nnnwo';
// let drow = '';

// for (let i = word.length -1; i >=0; i -= 1) {
//     drow = drow + word[i] 
// }
// console.log(word)
// console.log(drow)

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';
let menorPalavra = '';

for (let i = 0; i < array.length; i += 1) {
   for (let i2 = 0; i2 < array.length; i2 += 1) {
       if (array[i] > array[i2]) {
           maiorPalavra = array[i]
       }
   }
}
console.log(maiorPalavra)