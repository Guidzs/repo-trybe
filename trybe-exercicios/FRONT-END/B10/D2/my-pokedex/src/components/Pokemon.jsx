import { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image} = pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <div className='poke-card'>
        <div className='poke-infos'>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {value} {measurementUnit}</p>
        </div>      
        <img src={image} alt={`${name} 'Sprite'`} />
      </div>
    )
  }
}

export default Pokemon