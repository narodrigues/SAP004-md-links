const fs = require('fs');
const path = require('path');

const readFile = file => {
  const arr = [];
  const arquivo = path.resolve(file);
  const data = fs.readFileSync(arquivo, 'utf8')

  if(path.extname(file) === ".md"){
    const re = /\[([^\]]+)\]\((http.*)\)/gmi;
    const findLink = data.match(re);

    findLink.forEach(links => {
      const text = links.match(/\[([^\]]+)/)[0].replace(/(\[|\n)/gm, '');
      const href = links.match(/(https?\:[^\)]*)/)[0];
      arr.push({text, href, file});
    });
    return arr;
  } else {
    console.log('O arquivo não possui extensão ".md"')
  }
}

module.exports = readFile;