const fs = require('fs');
const data = require('../data/gryffindor');

function func(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i]['actor'] = 'Not yet aggregated.';
  }
  return arr;
}
(async () => {
  const results = func(data);
  const jsonString = JSON.stringify(results);
  fs.writeFileSync('../data/test.js', jsonString);
})();
