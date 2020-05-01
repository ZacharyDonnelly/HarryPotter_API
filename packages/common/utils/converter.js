const fs = require('fs');
const getResults = require('./char-scraper');
const { slytherin, gryffindor, hufflepuff, ravenclaw } = require('../data/URIs/Uri');

(async () => {
  const results = await getResults(hufflepuff);
  const jsonString = JSON.stringify(results);
  fs.writeFileSync('../data/test.js', jsonString);
})();
