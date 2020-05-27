const fs = require('fs');
const getResults = require('./char-scraper');

(async () => {
  const results = await getResults(hufflepuff);
  const jsonString = JSON.stringify(results);
  fs.writeFileSync('../data/test.js', jsonString);
})();
