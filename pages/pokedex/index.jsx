import Card from './Card';
import { useState } from 'react';

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);

  //console.log(pokemonList);

  return (
    <div className='pokedex'>
      {pokemonList.length > 1
        ? pokemonList.map((pokemon, index) => (
            <Card
              title={pokemon.name}
              price="12"
              description="le miroir de la chambre casser"
              key={index}
              pokemon={pokemon}
              index={index}
            />
          ))
        : <div>empty pokedex</div>}
    </div>
  );
}

export async function test() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
  if (response.results) {
    const initialPokemon = await response.results.json();
    setPokemonList(initialPokemon);
  }
  return null;
}
