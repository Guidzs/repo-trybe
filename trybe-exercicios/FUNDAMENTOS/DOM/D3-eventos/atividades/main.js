const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const techText = document.querySelector('.tech')
let container = [firstLi,secondLi,thirdLi]

// 1. Copie esse arquivo e edite apenas ele;?
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function rmvClass(clase) {
  for (const contain of container) {
    contain.classList.remove(clase);
  }
}
function addClassTech(event) {
  rmvClass('tech');
  event.target.classList.add('tech')
}

firstLi.addEventListener('click', addClassTech)
secondLi.addEventListener('click', addClassTech)
thirdLi.addEventListener('click', addClassTech)

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// input.addEventListener('', changeText)

// function changeText() {
//   techText.innerText = input.value;
// }

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function redirectPortfolio() {
  window.location.href = "https://guidzs.github.io/"
}
function changeColor1() {
  myWebpage.style.color = '#4B25FF'
}
function changeColor2() {
  myWebpage.style.color = '#FFFFFF'
}

myWebpage.addEventListener('dblclick', redirectPortfolio)
myWebpage.addEventListener('mouseover', changeColor1)
myWebpage.addEventListener('mouseleave', changeColor2)

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.