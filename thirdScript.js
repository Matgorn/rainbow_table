const fs = require('fs');

const password = 'c8e095e2a26f8540afabb36dcdaee3b1';

fs.readFile('./rainbow_word_list.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  };

  const brokenPassword = data.split('\n').find(el => el.split(' ')[1] === password).split(' ')[0];
  const result = `
    Name: Dariusz Wylon
    E-mail: d.wylon@selleo.com
    Password: ${brokenPassword}
  `;
  
  fs.writeFile('./result.txt', result, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});