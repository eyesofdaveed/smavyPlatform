import axios from 'axios';

const baseUrl =
  import.meta.env.VITE_ISPROD === 'false'
    ? import.meta.env.VITE_PROD_URL
    : import.meta.env.VITE_LOCAL_URL;

export const baseApi = async (link, method, data) => {
  switch (method) {
    case 'GET':
      try {
        const response = await axios.get(`${baseUrl}/${link}/`);
        console.log(response.data);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    case 'POST':
      try {
        const response = await axios.post(`${baseUrl}/${link}/`, data);
        return response.data;
      } catch (err) {
        console.log(err);
      }
  }
};
