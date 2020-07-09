const fs = require('fs');
const readFile = require('./readFile');
const readPath = require('./readPath')
const callValidate = require('./callValidate');

const mdLinks = (file, validate) => {
  return new Promise((resolve, reject) => {
    fs.stat(file, (e, stats) => {
      if(stats.isDirectory()){
        readPath(file)
          .then((data) => {
            callValidate(validate, data)
            .then(links => {
              return resolve(links)
            })
          })
          .catch(e => {
            reject(e);
          });
      } else if(stats.isFile()){
        readFile(file)
          .then((data) => {
            callValidate(validate, data)
            .then(links => {
              return resolve(links)
            })
          })
          .catch(e => {
            reject(e);
          });
      } else {
        reject(e);
      }
    });
  })
}

module.exports = mdLinks;