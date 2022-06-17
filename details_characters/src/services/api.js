import axios from 'axios';

const urlBase = 'https://swapi.dev/api/';

export function consultarPeople() {
  return axios.get(`${urlBase}/people`).then((promise) => {
    const people = promise.data;
    return people.results?.map((person) => {
      const obg ={
        name: person.name,
        starships: person.starships
      }
      console.log(obg);
      return obg;
    })
  })
}
