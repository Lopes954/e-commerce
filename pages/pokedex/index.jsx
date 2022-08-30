import Card from './Card';
import { useState, useEffect } from 'react';
import pokemonListApi from '../../src/service/routes/pokemonListApi';

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getPokedex = async () => {
      const data = await pokemonListApi.getPokemonList();

      console.log(data);

      if (data !== []) {
        setPokemonList(data.results);
      }
    };
    getPokedex();
  }, []);

  return (
    <div className="pokedex">
      {pokemonList.length > 1 ? (
        pokemonList.map((bestiole, iteration) => (
          <Card name={bestiole.name} id={iteration + 1} key={iteration} />
        ))
      ) : (
        <div>empty pokedex</div>
      )}
    </div>
  );
}
