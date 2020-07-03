
const fs = require('fs');

const mdLinks = (file) => {
  const myPromise = new Promise((resolve, reject) => {
    const arr = [];
    fs.readFile(file, 'utf8', (e, data) => {
      if(e){
        reject(e);
      } else {
        const re = /\[([^\]]+)\]\((http.*)\)/gmi;
        const findLink = data.match(re);

        findLink.forEach(links => {
          const text = links.match(/\[([^\]]+)/)[0].replace(/(\[|\n)/gm, '');
          const href = links.match(/(https?\:[^\)]*)/)[0];
          arr.push({text, href, file});
        });
        resolve(arr);
      }
    });
  });
  return myPromise;
}

module.exports = mdLinks;