import axios from 'axios';

const urlBase = 'https://swapi.dev/api/people';

export function consultarPeopleDetails(id) {
  return axios.get(`${urlBase}/${id}`).then((promise) => {
    const person = promise.data;
    const obg ={
      id: person.url.replace(/[^\d]+/gi, ''),
      starships: person.starships
    }
    return obg;
  })
}
