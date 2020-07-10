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
                return resolve(links);
              });
          })
          .catch(() => {
            reject('Não existe um arquivo com extensão ".md" nesse diretório');
          });
      } else if(stats.isFile()){
        readFile(file)
          .then((data) => {
            callValidate(validate, data)
              .then(links => {
                return resolve(links);
              });
          })
          .catch(() => {
            reject('O arquivo não possui extensão ".md"');
          });
      } else {
        reject('Erro');
      }
    });
  })
}

module.exports = mdLinks;