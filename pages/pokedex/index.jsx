import Card from './Card';
import { useState, useEffect } from 'react';
import pokemonListApi from '../../src/service/routes/pokemonListApi';

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokedex = async () => {
      const data = await pokemonListApi.getpokemonList();
      setPokemonList(data.results);
    };
    getPokedex();
  }, []);

  return (
    <div className="pokedex">
      {pokemonList.length > 1 ? (
        pokemonList.map((pokemon, index) => (
          <Card
            name={pokemon.name}
            id={index+1}
            key={index}
          />
        ))
      ) : (
        <div>empty pokedex</div>
      )}
    </div>
  );
}
