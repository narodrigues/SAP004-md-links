const callStats = (data) => {
  const links = data.map(x => x.href)
  const uniqueLinks = new Set(links)

  return {
    links: links.length,
    uniqueLinks: uniqueLinks.size
  }

  // const teste = data.map(x => x.status)
  // console.log(teste, 'meus status')
}

module.exports = callStats;