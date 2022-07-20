import { Component } from "react";
import Pokemon from './Pokemon';

class Pokedex extends Component {

  render() {
    const { pokemons } = this.props;
    const pokemonsInCards = pokemons.map((pokemon) => {
      return <Pokemon pokemon={pokemon} key={pokemon.id}/>
    })
    return (
      <section className="pokedex-sec">
        {pokemonsInCards}
      </section>
    )
  }
}

export default Pokedex;