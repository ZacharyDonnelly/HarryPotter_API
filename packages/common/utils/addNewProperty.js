const fs = require('fs');
const data = require();

function func(arr) {
  let id = 0;
  arr.forEach((curr) => {
    curr['id'] = id;
    id++;
  });
  return arr;
}
(async () => {
  const results = func(data);
  const jsonString = JSON.stringify(results);
  fs.writeFileSync(, jsonString);
})();
