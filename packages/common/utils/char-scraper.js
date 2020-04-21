const axios = require('axios');
const cheerio = require('cheerio');

const slytherinCharacters = new Set();

const fetchData = async (url) => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getResults = async (url) => {
  const $ = await fetchData(url);

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
