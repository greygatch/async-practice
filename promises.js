const request = require('request-promise');

request('http://swapi.co/api/people/1')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log('error:', err)
  })
