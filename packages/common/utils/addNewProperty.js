const fs = require('fs');
const data = require('../data/ravenclaw');

function func(arr) {
  arr.forEach((curr) => {
    delete curr['img'];
  });
  return arr;
}
(async () => {
  const results = func(data);
  const jsonString = JSON.stringify(results);
  fs.writeFileSync('../data/ravenclaw.js', jsonString);
})();
