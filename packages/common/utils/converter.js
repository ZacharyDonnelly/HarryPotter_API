const fs = require('fs');
const getResults = require('./char-scraper');

(async () => {
  const results = await getResults(ravenclawURL);
  const jsonString = JSON.stringify(results);
  fs.writeFileSync('../data/fillOutlatertoavoiderrors', jsonString);
})();
