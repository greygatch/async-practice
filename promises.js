import request from 'request-promise';

// request('http://swapi.co/api/people/1')
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log('error:', err)
//   });

/*****************/

const getPerson = request('http://swapi.co/api/people/1');
const getPlanet = request('http://swapi.co/api/planets/3');

Promise.all([getPerson, getPlanet])
  .then(response => {
    console.log('first response:', response[0]);
    console.log('***************');
    console.log('second response:', response[1]);
  })
  .catch(err => {
    console.log(err);
  });

/*****************/
