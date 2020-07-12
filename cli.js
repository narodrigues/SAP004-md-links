#!/usr/bin/env node

const mdLinks = require('./index.js');
const chalk = require('chalk');
const path = process.argv[2];
const options = process.argv;

mdLinks(path, options)
  .then(links => {
    if(options.includes('--stats') && !options.includes('--validate')){
      const returnStats = `${chalk.hex('#CFA6FF').bold('Total:')} ${chalk.bold(links.links)} \n${chalk.hex('#80C8FF').bold('Unique:')} ${chalk.bold(links.uniqueLinks)}`;
      console.log(returnStats);
    } else if(options.includes('--stats') && options.includes('--validate')){
      const returnStats = `${chalk.hex('#CFA6FF').bold('Total:')} ${chalk.bold(links.links)} \n${chalk.hex('#80C8FF').bold('Unique:')} ${chalk.bold(links.uniqueLinks)} \n${chalk.keyword('red').bold('Broken:')} ${chalk.bold(links.broken)}`;
      console.log(returnStats);
    } else if(options.includes('--validate')){
      links.forEach(infos => {
        const eachLink = `${chalk.hex('#CFA6FF').bold(infos.text)} \n${chalk.hex('#80C8FF').bold(infos.href)} ${infos.status > 400 ? chalk.bold('    ->    ') + chalk.keyword('red').bold(infos.status, infos.message) : chalk.bold('    ->    ') + chalk.keyword('lawngreen').bold(infos.status, infos.message)} \n${chalk.hex('#8FFFDB').bold(infos.file)} \n`;
        console.log(eachLink);
      });
    } else {
      links.forEach(infos => {
        const eachLink = `${chalk.hex('#CFA6FF').bold(infos.text)} \n${chalk.hex('#80C8FF').bold(infos.href)} \n${chalk.hex('#8FFFDB').bold(infos.file)} \n`;
        console.log(eachLink);
      });

    }
  })
  .catch(e => {
    console.log(e);
  });