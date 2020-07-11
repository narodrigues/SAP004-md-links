const validateLinks = require('./validateLinks');

const callValidate = data => {
  return new Promise(resolve => { 
    const arrayWithStatus = [];

    data.forEach(links => {
      arrayWithStatus.push(validateLinks(links.href));
    });

    return Promise.all(arrayWithStatus)
      .then(httpStatus => {
        for(let x = 0; x < httpStatus.length; x++){
          data[x].status = httpStatus[x];
        } 
        return resolve(data);
      });
  })
}

module.exports = callValidate;