const https = require('node-fetch');

const validateLinks = link => {
  return new Promise(resolve => {
    const linksStatus = [];
    const error = {
      status: 404, 
      message: 'Not Found'
    };
    
    https(link)
      .then(response => {
        if(response.status >= 200 && response.status <= 599){
          linksStatus.push({status: response.status, message: response.statusText});
          resolve({status: response.status, message: response.statusText});
        }
      })
      .catch(() => resolve(error));
  });
}

module.exports = validateLinks;