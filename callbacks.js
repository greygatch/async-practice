const request = require('request');

request('http://swapi.co/api/people/1', (err, response, body) => {
  if(err){
    console.log('ERROR:', err);
  }
  console.log(body);
})
