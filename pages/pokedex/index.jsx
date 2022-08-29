import Card from './../../components/Card';
import { useState } from 'react';

export default function Home({ initialPokemon }) {
  const [pokemon, setPokemon] = useState(initialPokemon);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    
      <main>
        <div>
          {  console.log(pokemon)}
          {pokemon.results.map((monster, index) => (
            <Card
              title={monster.name}
              price="12"
              description="le miroir de la chambre casser"
              key={index}
              pokemon={monster}
              index={index}
            />
          ))}
        </div>
      </main>
    
  );
}

export async function getStaticProps(context) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const initialPokemon = await response.json();

  return {
    props: {
      initialPokemon,
    },
  };
}
