const https = require('node-fetch');

const validateLinks = (link) => {
  return new Promise(resolve => {
    https(link)
      .then(response => {
        if(response.status >= 200 && response.status <= 599){
          resolve(`${response.status}: ${response.statusText}`);
        }
      })
      .catch(() => resolve('404: Not Found'));
  });
}

module.exports = validateLinks;