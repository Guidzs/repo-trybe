const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

const paragraphs = document.getElementsByClassName("info");

const title = document.getElementById("page-title");
  
const subtitle = [document.getElementById("subtitle"), document.getElementsByTagName('p')];

const sinopse = document.getElementById("second-paragraph");
  
title.innerText = 'Jogador N1';

paragraphs[0].style.color = "blue"

subtitle[0].innerText = "Sinopse";

subtitle[1][1].style.color = 'green'

sinopse.innerText = "A humanidade abriu mão da vida real para viver em uma realidade virtual mundialmente difundida: OASIS.";