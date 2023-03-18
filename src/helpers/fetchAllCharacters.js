import axios from 'axios';

export const fetchAllCharacters = async ({ request }) => {
  const url = new URL(request.url);

  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character${url.search}`
    );
    return response.data.results;
  } catch (error) {
    if (error.response) {
      console.log(error);
      throw new Error(`${error.message}`);
    } else if (error.request) {
      console.log(error.request);
      return error;
    } else {
      console.log(error);
      console.log('Error', error.message);
    }
  }
};
