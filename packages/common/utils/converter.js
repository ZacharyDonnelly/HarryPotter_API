const fs = require('fs');
const getResults = require('./char-scraper');

(async () => {
  const results = await getResults();
  const jsonString = JSON.stringify(results);
  fs.writeFileSync('../data/slytherin.json', jsonString, 'utf-8');
})();
