import axios from 'axios';

const BASE_URL = 'http://localhost:8800';

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
