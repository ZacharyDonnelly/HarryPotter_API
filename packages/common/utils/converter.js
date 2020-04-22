const fs = require('fs');
const getResults = require('./char-scraper');

const slytherinURL = 'https://harrypotter.fandom.com/wiki/Category:Slytherins';
const gryffindorURL = 'https://harrypotter.fandom.com/wiki/Category:Gryffindors';
const ravenclawURL = 'https://harrypotter.fandom.com/wiki/Category:Ravenclaws';
const hufflepuffURL = 'https://harrypotter.fandom.com/wiki/Category:Hufflepuffs';
(async () => {
  const results = await getResults(ravenclawURL);
  const jsonString = JSON.stringify(results);
  fs.writeFileSync('../data/ravenclaw.js', jsonString);
})();
