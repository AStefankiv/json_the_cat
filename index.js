const fetchBreedDescription = require('./breedFetcher');

const arg = process.argv.slice(2)[0];

fetchBreedDescription(arg, (error, bodyDesc) => {
  if (error) {
    console.log(`Error fetch details: ${error}`);
  } else {
    console.log(bodyDesc);
  }
});