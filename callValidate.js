const validateLinks = require('./validateLinks');

const callValidate = (validate, data) => {
  return new Promise(resolve => { 
    if(validate === '--validate'){
      const status = [];

      data.forEach(links => {
        status.push(validateLinks(links.href));
      });
      
      return Promise.all(status)
        .then(httpStatus => {
          for(let x = 0; x < httpStatus.length; x++){
            data[x].stats = httpStatus[x];
          } 
          return resolve(data);
        });
    }
    return resolve(data);
  })
}

module.exports = callValidate;