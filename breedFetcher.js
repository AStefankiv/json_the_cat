const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(apiURL, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    
    const [data] = JSON.parse(body);
    
    if (!data) {
      callback(`No data found for ${breedName}`, null);
      return;
    }

    callback(null, data.description);
  });
};

module.exports = fetchBreedDescription;