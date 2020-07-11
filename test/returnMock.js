const resultsWithoutStatus = [
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

const resultsWithStatus = [
  {
    file: '/srv/www/SAP004-md-links/test/mock.md',
    text: 'Beauty and the Beast',
    href: 'https://pt.wikipedia.org/wiki/Beauty_and_the_Beast_(filme_de_1991)',
    stats: '200: OK'
  },
  {
    file: '/srv/www/SAP004-md-links/test/mock.md',
    text: 'Fera',
    href: 'https://pt.wikipedia.org/wiki/Fera_(Disney)',
    stats: '200: OK'
  },
  {
    file: '/srv/www/SAP004-md-links/test/mock.md',
    text: 'Bela',
    href: 'https://pt.wikipedia.org/wiki/Bela_(personagem)',
    stats: '200: OK'
  }
]

const brokenLinks = [
  {
    file: '/srv/www/SAP004-md-links/test/mockWithErrors.md',
    text: 'Beauty and the Beast',
    href: 'https://pt.wiki_pedia.org/wiki/Beauty_and_the_Beast_(filme_de_1991)',
    stats: '404: Not Found'
  },
  {
    file: '/srv/www/SAP004-md-links/test/mockWithErrors.md',
    text: 'Fera',
    href: 'https://pt.wiki_pedia.org/wiki/Fera_(Disney)',
    stats: '404: Not Found'
  },
  {
    file: '/srv/www/SAP004-md-links/test/mockWithErrors.md',
    text: 'Bela',
    href: 'https://pt.wiki_pedia.org/wiki/Bela_(personagem)',
    stats: '404: Not Found'
  }
]

module.exports = {resultsWithoutStatus, resultsWithStatus, brokenLinks}