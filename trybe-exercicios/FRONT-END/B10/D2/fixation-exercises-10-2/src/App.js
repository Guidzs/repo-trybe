// src/App.js
import React from 'react';
import Album from './Album';

class App extends React.Component {
  render() {
    // Declaração do objeto contendo informações do album01
    const album01 = {
      image: 'https://th.bing.com/th/id/OIP.DTD-h4pnkbqH4fAZgqn8dgAAAA?pid=ImgDet&rs=1',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    // Declaração do objeto contendo informações do album02
    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    // Retorno do que será renderizado
    return (
      <>
        <Album album={ album01 }/>
        <Album album={ album02 }/>
      </>
    );
  }
}

export default App;