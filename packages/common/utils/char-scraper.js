const axios = require('axios');
const cheerio = require('cheerio');

const fetchData = async (url) => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getResults = async (url) => {
  let characters = {};
  const charArr = [];
  const $ = await fetchData(url);

  $(
    '.category-page__members > .category-page__members-for-char > .category-page__member > .category-page__member-link'
  ).each((_, element) => {
    characters = {
      name: $(element).text(),
      house: 'Ravenclaw',
      gender: 'Male',
    };
    charArr.push(characters);
  });
  return charArr;
};
module.exports = getResults;
