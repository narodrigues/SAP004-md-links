#!/usr/bin/env node

const mdLinks = require('./index.js');
const path = process.argv[2];
const options = process.argv;

mdLinks(path, options)
  .then(links => {
    if(options.includes('--stats') && options.includes('--validate')){
      const returnStats = `Total: ${links.links} \nUnique: ${links.uniqueLinks} \nBroken: ${links.broken}`;
      console.log(returnStats);
    } else if(options.includes('--stats') && !options.includes('--validate')){
      const returnStats = `Total: ${links.links} \nUnique: ${links.uniqueLinks}`;
      console.log(returnStats);
    } else if(options.includes('--validate')){
      links.forEach(infos => {
        const eachLink = `${infos.file}  ->     ${infos.text} ->       ${infos.href} ->       ${infos.status}: ${infos.message}`;
        console.log(eachLink);
      });
    } else {
      links.forEach(infos => {
        const eachLink = `${infos.file}  ->     ${infos.text} ->       ${infos.href}`;
        console.log(eachLink);
      });

    }
  })
  .catch(e => {
    console.log(e);
  });