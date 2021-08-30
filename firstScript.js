const fs = require('fs');

fs.readFile('./pan_tadeusz.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  const result = data.split(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\n\r—«…»]/gmi).filter((value, index, self) => value !== '' && self.indexOf(value) === index).join('\n')

  fs.writeFile('./word_list.txt', result, 'utf8', (err) => {
    if (err) return console.log(err);
  });
});
