type provas = [number, number , number ,number];
type trabalhos = [number, number]

class PEstudante {
  private _matricula: number;
  private _nome: string;
  private _provas: provas;
  private _trabalhos: trabalhos;

  constructor(matricula: number, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._provas = [0, 0, 0, 0];
    this._trabalhos = [0, 0];
  }

  set provas(provas: provas) {
    if (provas.length === 4) { this._provas = provas }
    else { console.log('Provas incompletas'); }
  }

  set trabalhos(trabalhos: trabalhos) {
    if (trabalhos.length === 2) { this._trabalhos = trabalhos }
    else { console.log('Trabalhos incompletas'); }
  }

  calculaASoma() {
    const sumAvaluations = this._provas.reduce((total, nota) => total + nota);
    const sumWorks = this._trabalhos.reduce((total, nota) => total + nota);
    return sumAvaluations + sumWorks;
  }

  calculaMedia() {
    const total = this.calculaASoma();
    return total / 6;
  }
}

const e1 = new PEstudante(123, 'carlos');

e1.provas = [8, 6, 5, 5];
e1.trabalhos = [10, 6];

console.log(e1.calculaASoma());
console.log(e1.calculaMedia());
