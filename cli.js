#!/usr/bin/env node

const mdLinks = require('./index.js');
const path = process.argv[2]
const option = process.argv[3]

mdLinks(path, option)
  .then(links => {
    if(option === '--stats'){
      const returnStats = `Total: ${links.links} \nUnique: ${links.uniqueLinks}`;
      console.log(returnStats)
    }
    else if(option === '--validate'){
      links.forEach(infos => {
        const eachLink = `${infos.file}  ->     ${infos.text} ->       ${infos.href}  ${infos.status ?  "->       " + infos.status : ''}`;
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