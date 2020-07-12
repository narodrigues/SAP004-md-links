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
          if(text.length > 50){
            const formattedName = `${text.substring(0, 51)}...`;
            arr.push({text: formattedName, href, file: fullPath});
          } else {
            arr.push({text, href, file: fullPath});
          }
        });
        return resolve(arr);
      } else {
        return reject(e);
      }
    });
  });
}

module.exports = readFile;