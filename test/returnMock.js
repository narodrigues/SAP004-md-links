const resultsWithoutValidate = [
  {
    file: '/srv/www/SAP004-md-links/test/mock.md',
    text: 'Beauty and the Beast',
    href: 'https://pt.wikipedia.org/wiki/Beauty_and_the_Beast_(filme_de_1991)'
  },
  {
    file: '/srv/www/SAP004-md-links/test/mock.md',
    text: 'Fera',
    href: 'https://pt.wikipedia.org/wiki/Fera_(Disney)'
  },
  {
    file: '/srv/www/SAP004-md-links/test/mock.md',
    text: 'Bela',
    href: 'https://pt.wikipedia.org/wiki/Bela_(personagem)'
  }
]

const resultsWithValidate = [
  {
    file: '/srv/www/SAP004-md-links/test/mock.md',
    text: 'Beauty and the Beast',
    href: 'https://pt.wikipedia.org/wiki/Beauty_and_the_Beast_(filme_de_1991)',
    status: '200: OK'
  },
  {
    file: '/srv/www/SAP004-md-links/test/mock.md',
    text: 'Fera',
    href: 'https://pt.wikipedia.org/wiki/Fera_(Disney)',
    status: '200: OK'
  },
  {
    file: '/srv/www/SAP004-md-links/test/mock.md',
    text: 'Bela',
    href: 'https://pt.wikipedia.org/wiki/Bela_(personagem)',
    status: '200: OK'
  }
]

const brokenLinks = [
  {
    file: '/srv/www/SAP004-md-links/test/mockWithErrors.md',
    text: 'Beauty and the Beast',
    href: 'https://pt.wiki_pedia.org/wiki/Beauty_and_the_Beast_(filme_de_1991)',
    status: '404: Not Found'
  },
  {
    file: '/srv/www/SAP004-md-links/test/mockWithErrors.md',
    text: 'Fera',
    href: 'https://pt.wiki_pedia.org/wiki/Fera_(Disney)',
    status: '404: Not Found'
  },
  {
    file: '/srv/www/SAP004-md-links/test/mockWithErrors.md',
    text: 'Bela',
    href: 'https://pt.wiki_pedia.org/wiki/Bela_(personagem)',
    status: '404: Not Found'
  }
]

const statsReturn = {
  links: 3,
  uniqueLinks: 3
}

module.exports = {resultsWithoutValidate, resultsWithValidate, brokenLinks, statsReturn}