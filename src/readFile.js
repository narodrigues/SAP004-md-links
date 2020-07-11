const fs = require('fs');
const path = require('path');

const readFile = file => {
  return new Promise((resolve, reject) => {
    const arr = [];
    const fullPath = path.resolve(file);

    fs.readFile(fullPath, 'utf8', (e, data) => {
      if(path.extname(file) === ".md"){
        const re = /(\[[^\]]+\]\(http.*?)\)[^)]/gmi;
        const findLink = data.match(re);

        findLink.forEach(links => {
          const text = links.match(/\[([^\]]+)/)[1].replace(/(\n)/gm, '');
          const href = links.match(/(https?:.*?)\)[^)]/)[1];
          // const href = links.match(/(http.*?)\)[^)]/)[1];
          // const href = links.match(/(https?\:[^\)]*)/)[0];
          arr.push({text, href, file: fullPath});

        });
        return resolve(arr);
      } 
      // return reject(e)
      else {
        return reject(e);
      }
    });
  });
}

module.exports = readFile;