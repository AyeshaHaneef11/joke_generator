
const URL = 'https://official-joke-api.appspot.com/random_joke';
const button = document.querySelector('#js-btn');
const setupPara  = document.querySelector('#joke');
//const punchlinePara = document.querySelector('#punchline');

const getJoke = async ()=>{
  //console.log('fetching data...');
  const response = await fetch(URL); // it returns a promise
  const data = await response.json();

  //console.log(data.setup);
  setupPara.innerHTML =`${data.setup} 
                          <br>
                         ${data.punchline} &#128514`;

}

button.addEventListener('click' , getJoke);

