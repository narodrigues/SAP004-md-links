const fs = require('fs');
const path = require('path');
const readFile = require('./readFile');

const readPath = paths => {
  return new Promise((resolve, reject) => { 
    const file = path.resolve(paths);

    fs.readdir(file, 'utf8', (e, data) => {
      for(let x = 0; x < data.length; x++){
        if(path.extname(data[x]) === ".md"){
          const fullPath = `${file}/${data[x]}`;
          return resolve(readFile(fullPath));
        }
      } 
      return reject(e);
    });
  })
}

module.exports = readPath;