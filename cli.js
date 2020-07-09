#!/usr/bin/env node

const mdLinks = require('./index.js');
const path = process.argv[2]
const validate = process.argv[3]

mdLinks(path, validate)
  .then(links => {
    links.forEach(infos => {
      const eachLink = `${infos.file}  ->    ${infos.stats ?  infos.stats : ''}   ->     ${infos.text}     ->       ${infos.href}`;
      console.log(eachLink);
    });
  })
  .catch(e => {
    console.log(e);
  });