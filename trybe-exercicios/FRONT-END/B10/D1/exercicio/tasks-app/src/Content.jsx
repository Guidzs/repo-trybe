import { Component } from "react";

class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    return (
      <main>
        {conteudos.map(({ conteudo, bloco, status }, index) => {
          return (
            <div key={index}>
              <p>{conteudo}</p>
              <p>{status}</p>
              <p>{bloco}</p>
            </div>
          )
        })}
      </main>
    )
  }
}

export default Content;