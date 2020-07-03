
const fs = require('fs');
// const arr = [];



const mdLinks = (path) => {
  fs.readFile(path, 'utf8', (e, data) => {
    if(e){
      console.log(e);
    } else {
      const re = /\[([^\]]+)\]\((http.*)\)/gm
      // const re = /\(https|http.*\)/gm;
      const findLink = data.match(re);
      findLink.forEach(links => {
        console.log(link)
        const text = links.match(/\[([^\]]+)\]/);
        const href = links.match(/\((http.*)\)/);
        // console.log(text.toString())
        // console.log(links)
        // console.log(href)
      })
    }
  })
}

module.exports = mdLinks;
