import axios from 'axios';

const chuckApi = {
  async getRandomChuckCitation() {
    let response = await axios
      .get('https://api.chucknorris.io/jokes/random')
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

export default chuckApi;

