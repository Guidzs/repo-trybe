let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersSoma = 0;
let largestNumber = 0;
let imparNumbers = 0;
let smallestNumber = 0;

// console.log(numbers)

// for (let index2 = 0; index < numbers.length; index += 1) {
//     numbersSoma = numbersSoma + numbers[index]
// }
// console.log(numbersSoma);
// console.log(numbersSoma / numbers.length);

// if (numbersSoma / numbers.length > 20) {
//     console.log("valor maior que 20")
// }
// else {
//     console.log("valor menor ou igual a 20")
// }

// for (let index = 0; index < numbers.length; index += 1) {
//       if (numbers[index] > largestNumber) {
//         largestNumber = numbers[index]
//       } 
// }
// console.log(largestNumber)

// for (let index = 0; index < numbers.length; index += 1) {
//     if ((numbers[index] % 2) === 1) {
//         imparNumbers += 1
//     }
// }
// if (imparNumbers > 1) {
//     console.log(imparNumbers)
// } else {
//     console.log('Nenhum valor ímpar encontrado')
// }

for (let index = 0; index < numbers.length; index += 1) {
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
        if (numbers[index] < numbers[index2]) {
            smallestNumber = numbers[index]
         }          
      }
}
console.log(smallestNumber)