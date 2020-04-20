const axios = require('axios');
const cheerio = require('cheerio');

module.exports = (url) => {
  axios(url)
    .then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      const charTable = $(
        '.category-page__members > .category-page__members-for-char > .category-page__member'
      );
      const allCharacters = [];

      charTable.each(function (url) {
        const Character = $(this).find('.category-page__member-link').text();
        allCharacters.push({
          Character,
        });
      });
      return allCharacters;
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};
