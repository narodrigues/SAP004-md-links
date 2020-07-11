const fs = require('fs');
const readFile = require('./src/readFile');
const readPath = require('./src/readPath')
const callValidate = require('./src/callValidate');
const callStats = require('./src/callStats')

const mdLinks = (file, option) => {
  return new Promise((resolve, reject) => {
    fs.stat(file, (e, stats) => {
      if(stats.isDirectory()){
        readPath(file)
          .then((data) => {
            if(option === '--validate'){
              callValidate(data, option)
                .then(links => {
                  return resolve(links);
                });
            } else if(option === '--stats'){
              callValidate(data, option)
                .then(links => {
                  return resolve(callStats(links));
                })
            } else {
              return resolve(data);
            }
          })
          .catch(() => {
            reject('Não existe um arquivo com extensão ".md" nesse diretório');
          });
      } else if(stats.isFile()){
        readFile(file)
          .then((data) => {
            if(option === '--validate'){
              callValidate(data, option)
                .then(links => {
                  return resolve(links);
                });
            } else if(option === '--stats'){
              callValidate(data, option)
                .then(links => {
                  return resolve(callStats(links));
                })
            } else {
              return resolve(data);
            }
          })
          .catch(() => {
            reject('O arquivo não possui extensão ".md"');
          });
      } else {
        reject(e);
      }
    });
  })
}

module.exports = mdLinks;