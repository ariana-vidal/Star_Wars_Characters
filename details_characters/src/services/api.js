import axios from 'axios';

const urlBase = 'https://swapi.dev/api/';

export function consultarPeople() {
  return axios.get(`${urlBase}/people`).then((promise) => {
    const people = promise.data;
    return people.results?.map((person) => {
      const obg ={
        id: person.url.replace(/[^\d]+/gi, ''),
        name: person.name,
        height: person.height,
        birth_year: person.birth_year,
        gender: person.gender,
        starships: person.starships
      }
      return obg;
    })
  })
}
