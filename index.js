const fs = require('fs');
const readFile = require('./readFile');
const readPath = require('./readPath')
const validateLinks = require('./validateLinks');

const mdLinks = (file, validate) => {
  return new Promise((resolve, reject) => {
    fs.stat(file, (e, stats) => {
      if(stats.isDirectory()){
        resolve(readPath(file))
      } else if(stats.isFile()){
        readFile(file)
        .then((data) => {
          if (validate === '--validate') {
            const status = [];

            data.forEach(links => {
              status.push(validateLinks(links.href));
            })
            return Promise.all(status).then(httpStatus => {
              for(let x = 0; x < httpStatus.length; x++){
                data[x].stats = httpStatus[x];
              } 
              return resolve(data);
            })
          }
          return resolve(data);
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
