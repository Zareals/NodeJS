const request = require('request');


let apiKey = 'put your api key here';
let A = '33.8869';
let L = '9.5375';
let city = 'london';
let url = `https://api.darksky.net/forecast/${apiKey}/${A},${L}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.currently.temperature} degree in ${weather.timezone} `;
    
    console.log(message);
  }
});

