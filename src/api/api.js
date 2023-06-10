import axios from 'axios';

const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
  params: { hl: 'en', gl: 'US' },
  headers: {
    'X-RapidAPI-Key': 'c8f2825b2bmsh3a09c4e5d82671fp1a8948jsn47cd0c571bde',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};


export const fetchApiData = async (query) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${query}`, options);
    return data;
  } catch (e) { console.log(e) }
}