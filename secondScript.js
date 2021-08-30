const crypto = require('crypto');
const fs = require('fs');

fs.readFile('./word_list.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  const result = data.split('\n').map(word => [word, ' ',crypto.createHash('md5').update(word).digest("hex"), '\n'].join('')).flat().join('')
  
  fs.writeFile('./rainbow_word_list.txt', result, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});
