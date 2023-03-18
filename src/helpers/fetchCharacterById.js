import axios from 'axios';

export const fetchCharacterById = async ({ params }) => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${params.id}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error);
      throw new Error(`${error.message}`);
      // return error;
    } else if (error.request) {
      console.log(error.request);
      return error;
    } else {
      console.log(error);
      console.log('Error', error.message);
    }
  }
};
