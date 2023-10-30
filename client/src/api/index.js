import axios from 'axios';

const BASE_URL = 'http://localhost:8800';

export const baseApi = async (link, method) => {
  switch (method) {
    case 'GET':
      try {
        const response = await axios.get(`${BASE_URL}/${link}/`);
        return response.data;
      } catch (err) {
        console.log(err);
      }
  }
};
