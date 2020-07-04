#!/usr/bin/env node

const mdLinks = require('./index.js');

const [,, args] = process.argv;

mdLinks(args)
.then(links => {
  console.log(links);
})
.catch(e => {
  console.error(e);
});