
const fs = require('fs');

const mdLinks = (path) => {
  const myPromise = new Promise((resolve, reject) => {
    const arr = [];
    fs.readFile(path, 'utf8', (e, data) => {
      if(e){
        reject(e);
      } else {
        const re = /\[([^\]]+)\]\((http.*)\)/gm
        const findLink = data.match(re);

        findLink.forEach(links => {
          const text = links.match(/\[([^\]]+)/)[0].replace('[', '').replace('\n', ' ');
          const href = links.match(/(http.*)/)[0];
          arr.push({text, href, file: path});
        });
        resolve(arr);
      }
    });
  });
  return myPromise;
}

module.exports = mdLinks;