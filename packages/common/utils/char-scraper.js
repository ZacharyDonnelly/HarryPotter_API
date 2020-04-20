const axios = require('axios');
const cheerio = require('cheerio');

const slytherinURL = 'https://harrypotter.fandom.com/wiki/Category:Slytherins';
const gryffindorURL = 'https://harrypotter.fandom.com/wiki/Category:Gryffindors';
const ravenclawURL = 'https://harrypotter.fandom.com/wiki/Category:Ravenclaws';
const hufflepuffURL = 'https://harrypotter.fandom.com/wiki/Category:Hufflepuffs';

const slytherinCharacters = new Set();

const fetchData = async () => {
  const result = await axios.get(slytherinURL);
  return cheerio.load(result.data);
};

const getResults = async () => {
  const $ = await fetchData();

  $(
    '.category-page__members > .category-page__members-for-char > .category-page__member > .category-page__member-link'
  ).each((_, element) => {
    slytherinCharacters.add($(element).text());
  });
  return {
    slytherinCharacters: [...slytherinCharacters].sort(),
  };
};

module.exports = getResults;
