const axios = require('axios');
const cheerio = require('cheerio');

const fetchData = async (url) => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getResults = async (url) => {
  let hufflepuffCharacters = {};
  const hufflepuffArray = [];
  const $ = await fetchData(url);

  $(
    '.category-page__members > .category-page__members-for-char > .category-page__member > .category-page__member-link'
  ).each((_, element) => {
    hufflepuffCharacters = {
      name: $(element).text(),
      house: 'Hufflepuff',
    };
    hufflepuffArray.push(hufflepuffCharacters);
  });
  return hufflepuffArray;
};

module.exports = getResults;
