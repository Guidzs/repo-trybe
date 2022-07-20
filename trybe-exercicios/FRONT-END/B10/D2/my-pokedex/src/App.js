import pokemons from './data';
import Pokedex from './components/Pokedex';
import TitleH1 from './components/TitleH1';

function App() {
  return (
    <>
      <header>
        <TitleH1 title='Pokedex'/>
      </header>
      <main>
        <Pokedex pokemons={pokemons}/>
      </main>
    </>
  );
}

export default App;
