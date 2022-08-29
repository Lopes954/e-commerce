import pokemonListApi from '../../src/service/routes/pokemonListApi';

const PokemonInfo = ({id}) => {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon= async () => {
      const data = await pokemonListApi.getPokemonByID(id);
      setPokemon(data)
    };
    getPokemon();
  }, []);

console.log(pokemon);

  return (
    <article className="card">
    </article>
  );
};

export default PokemonInfo;
