const request = require('request');

request('http://swapi.co/api/people/1', (err, response, body) => {
  if(err){
    console.log('ERROR:', err);
  }
  console.log('first response:', body);
  console.log('**************');

  request('http://swapi.co/api/planets/3/', (err, response, body) => {
    if(err){
      console.log('ERROR', err);
    }
    console.log('second response:', body);
    console.log('**************');
  });

})
