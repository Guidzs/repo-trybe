// let infoMargarida = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim'
// };

//   console.log('Bem vinda,', info['personagem'])

//   console.log(info)

//   for (let key in info) {
//     console.log(key)
//   }

//   for (let key in info) {
//     console.log(info[key])
//   }

// let infoTioPatinhas = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim'
// };


// for (let key in infoMargarida,infoTioPatinhas) {
//   if (infoMargarida[key] === 'Sim' && infoTioPatinhas[key] === 'Sim') {
//     console.log('Ambos recorrentes')
//   }
//   else {
//     console.log(infoMargarida[key] + ' e ' + infoTioPatinhas[key])
//   }
// }

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    },
  ],
};

// console.log('O livro favorito de ' + leitor['nome'] + ' ' + leitor['sobrenome'] + ' se chama ' + "'" + leitor.livrosFavoritos[0].titulo + "'")

// console.log(leitor['nome'] + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')