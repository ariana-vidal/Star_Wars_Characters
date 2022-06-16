import axios from "axios";

const api = axios.create({
  url: 'https://swapi.dev/api/people/'
});

export default api;