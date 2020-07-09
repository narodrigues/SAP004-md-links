const https = require('node-fetch');

const validateLinks = (link) => {
  return new Promise((resolve, reject) => {
    https(link)
    .then(response => {
      if(response.status >= 200 && response.status <= 599){
        resolve(`${response.status}: ${response.statusText}`)
      } else {
        reject('Link inválido');
      }
    });
  });
}

module.exports = validateLinks