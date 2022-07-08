const jsonInfo = `{
    "muitasEmpresasUsam": [
      "Google",
      "Twitter",
      "Facebook",
      "etc..."
    ],
    "temVariasVantagens": [
      "Legível",
      "Fácil de usar",
      "Leve",
      "Popular",
      "Versátil"
    ],
    "muitasLinguagensDaoSuporte": [
      "Python",
      "C",
      "C++",
      "Java",
      "PHP"
    ]
  }`;

const usoJSONPorque = JSON.parse(jsonInfo);

const corporationsList = document.getElementById('corporations-used-by');
const advantagesList = document.getElementById('advantages');
const languagesList = document.getElementById('languages-used-by');

usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
	setTimeout(() => {
		const newLi = document.createElement('li');
		newLi.innerText = empresa;
		corporationsList.appendChild(newLi);
	}, 10)

});

usoJSONPorque.temVariasVantagens.map((vantagens) => {
	setTimeout(() => {
		const newLi = document.createElement('li');
		newLi.innerText = vantagens;
		advantagesList.appendChild(newLi);
	}, 250)
	
});

usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
	setTimeout(() => {
		const newLi = document.createElement('li');
		newLi.innerText = linguagens;
		languagesList.appendChild(newLi);
	}, 500)

});