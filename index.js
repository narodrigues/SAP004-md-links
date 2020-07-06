const fs = require('fs');
const readFile = require('./readFile');
const readPath = require('./readPath')

const mdLinks = file => {
  return new Promise((resolve, reject) => {
    fs.stat(file, (e, stats) => {
      if(e){
        reject(e);
      } else if(stats.isDirectory()){
        resolve(readPath(file))
      } else if(stats.isFile()){
        resolve(readFile(file))
      }
    });
  });
}

module.exports = mdLinks;