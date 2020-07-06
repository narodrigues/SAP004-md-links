const fs = require('fs');
const path = require('path');
const readFile = require('./readFile');

const readPath = paths => {
  const file = path.resolve(paths);
  const myPath = fs.readdirSync(file, 'utf8');

  for(let x = 0; x < myPath.length; x++){
    if(path.extname(myPath[x]) === ".md"){
      const fullPath = `${file}/${myPath[x]}`;
      return readFile(fullPath);
    }
    else {
      console.log('erro');
    }
  } 
}

module.exports = readPath;