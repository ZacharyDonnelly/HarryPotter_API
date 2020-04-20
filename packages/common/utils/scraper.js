const axios = require('axios');
const cheerio = require('cheerio');

const scraper = (url) => {
  axios
    .get(url)
    .then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      const charTable = $(
        '.category-page__members > .category-page__members-for-char > .category-page__member'
      );
      const allCharacters = [];

      charTable.each(function () {
        const Character = $(this).find('.category-page__member-link').text();
        allCharacters.push({ Character });
      });
      return allCharacters;
    })
    .then((res) => {
      const arr = [];
      arr.push(res);
      console.log(arr);
      return arr;
    })
    .catch((err) => {
      console.error(err);
    });
};

const slytherinURL = 'https://harrypotter.fandom.com/wiki/Category:Slytherins';
const gryffindorURL = 'https://harrypotter.fandom.com/wiki/Category:Gryffindors';
const ravenclawURL = 'https://harrypotter.fandom.com/wiki/Category:Ravenclaws';
const hufflepuffURL = 'https://harrypotter.fandom.com/wiki/Category:Hufflepuffs';

scraper(hufflepuffURL);

module.exports = scraper;
