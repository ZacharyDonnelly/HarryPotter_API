const fs = require('fs');
const getResults = require('./char-scraper');

(async () => {
  const results = await getResults();
  const jsonString = JSON.stringify(results);
  fs.writeFileSync('../slytherin.json', jsonString, 'utf-8');
})();
