const resultsWithoutValidate = [
  {
    file: '/srv/www/SAP004-md-links/test/mock.md',
    text: 'Beauty and the Beast',
    href: 'https://pt.wiki_pedia.org/wiki/Beauty_and_the_Beast_(filme_de_1991)'
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
    href: 'https://pt.wiki_pedia.org/wiki/Beauty_and_the_Beast_(filme_de_1991)',
    status: 404,
    message: 'Not Found'
  },
  {
    file: '/srv/www/SAP004-md-links/test/mock.md',
    text: 'Fera',
    href: 'https://pt.wikipedia.org/wiki/Fera_(Disney)',
    status: 200,
    message: 'OK'
  },
  {
    file: '/srv/www/SAP004-md-links/test/mock.md',
    text: 'Bela',
    href: 'https://pt.wikipedia.org/wiki/Bela_(personagem)',
    status: 200,
    message: 'OK'
  }
]

const statsReturn = {
  links: 3,
  uniqueLinks: 3,
  broken: 1
}

const fullName = [
  {
    file: '/srv/www/SAP004-md-links/test/secondMock.md',
    text: 'Em março de 2017 o clássico ganhou uma versão Live-...',
    href: 'https://variety.com/2015/film/news/beauty-and-the-beast-release-date-disney-live-action-2017-1201453646/',
    status: 200,
    message: 'OK'
  }
]

module.exports = {resultsWithoutValidate, resultsWithValidate, statsReturn, fullName}