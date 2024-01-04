import axios from 'axios';

const BASE_URL = 'https://smavybe-production.up.railway.app/';

export const login = async ({ username, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/`, {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
