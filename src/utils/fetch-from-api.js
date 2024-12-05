import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': '2c0ad88b82msheebe04f7c7ef750p183eddjsneb694082a404',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };


export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}