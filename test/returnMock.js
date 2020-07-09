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

module.exports = {resultsWithoutStatus, resultsWithStatus}