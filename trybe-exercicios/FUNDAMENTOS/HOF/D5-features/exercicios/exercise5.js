const myList = [1, 2, 3];

// escreva swap abaixo
// const swap = () => { const [p, s, t] = myList; return [t, s, p]};
  const swap = (a, b, c) => [c, b, a];

console.log(swap(...myList));