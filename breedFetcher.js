const request = require('request');
const arg = process.argv.slice(2)[0];

const apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${arg}`;
request(apiURL, (error, response, body) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else if (response.statusCode !== 200) {
    console.log(`Status Code: ${response.statusCode}`);
  } else {
    if (!body.trim()) {
      console.log(`Breed ${arg} not found`);
    } else {
      const obj = JSON.parse(body);
      if (obj.length === 0) {
        console.log(`No data found for ${arg}`);
      } else {
        console.log(`${obj[0].description}\n`);
        console.log(`The type of the object is --${typeof obj}--`);
      }
    }
  }
});