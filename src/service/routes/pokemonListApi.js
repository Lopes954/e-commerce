import axios from 'axios';

const pokemonListApi = {
  async getPokemonList() {
    let response = await axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(`Route does not exist !`, error);
      });

    if (response) {
      return response.data;
    }
    return [];
  },

  async getPokemonByID(id) {
    let response = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.error(`Route does not exist !`, error);
      });

    if (response) {
      return response.data;
    }
    return [];
  },
};

export default pokemonListApi;
