const request = require('request-promise');

async function getStuff(){
  try{
    const person = await request('http://swapi.co/api/people/1');
    const planet = await request('http://swapi.co/api/planets/3');

    console.log('first response:', person);
    console.log('***************');
    console.log('second response:', planet);
  }catch(err){
    console.log('error:', err)
  }
}

getStuff();
