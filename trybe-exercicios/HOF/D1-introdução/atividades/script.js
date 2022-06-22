const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
//   console.log(initialSum(6));

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

//   repeat(5, console.log);

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

// repeat(7, isEven); // Testa quais números serão pares;
// repeat(7, isOdd); // Testa quais números serão ímpares;

const wakeUp = () => 'Acorda MIZERAAAA';
const sleep = () => 'A mimir';

const doingThings = (func) => func();

// console.log(doingThings(wakeUp));
// console.log(doingThings(sleep));
