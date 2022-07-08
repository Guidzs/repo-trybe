const uList = document.querySelector('#crypto-list');
const url = `https://api.coincap.io/v2/assets`;

const requestCryptos = async () => {
  const response = await fetch(url);
  const { data } = await response.json();
  data.forEach(({ name, symbol, priceUsd }, indx) => {
    const newLi = document.createElement('li');
    const string = `${name} (${symbol}): ${parseFloat(priceUsd).toFixed(2)}`;
    newLi.innerText = string;
    if (indx <= 9) uList.appendChild(newLi);
  })
}

window.onload = () => requestCryptos()