let number = 21.968;
let fatorialNumber = 1;

for (let index = 0; index < number; index += 1 ) {
    fatorialNumber = fatorialNumber * (number - index)
}
console.log(fatorialNumber)