const validateLinks = require('./validateLinks');
// const callStats = require('./callStats');

const callValidate = (validate, data) => {
  return new Promise(resolve => { 
    // if(validate === '--validate'){
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
    // else if(validate === '--stats'){
    //   callStats(data);
    // }
  //   return resolve(data);
  // });
}

module.exports = callValidate;