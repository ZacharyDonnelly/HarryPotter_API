const axios = require('axios');
const cheerio = require('cheerio');

const fetchData = async (url) => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getResults = async (url) => {
  const ravenclawCharacters = {};
  const ravenclawArray = [];
  const $ = await fetchData(url);

  $(
    '.category-page__members > .category-page__members-for-char > .category-page__member > .category-page__member-link'
  ).each((_, element) => {
    // ! AVOIDING ERRORS VIA COMMENTING
    // ravenclawCharacters = {
    //   name: $(element).text(),
    //   house: 'Ravenclaw',
    //   gender: 'Male',
    // };
    // ravenclawArray.push(ravenclawCharacters);
  });
  return ravenclawArray;
};
// module.exports = ravenclawArray;
