const URL = 'https://official-joke-api.appspot.com/random_joke';

const getJoke = async ()=>{
  console.log('fetching data...');
  const response = await fetch(URL); // it returns a promise
  const data = await response.json();
  console.log(data);
  


   
}
getJoke();
