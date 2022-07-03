const sum = (...rest) => rest.reduce((a, c) => a + c, 0);

const nums = [1, 3, 5, 7, 2, 8]

console.log(sum(...nums));