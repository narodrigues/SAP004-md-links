const callStats = data => {
  const links = data.map(x => x.href);
  const uniqueLinks = new Set(links);
  const status = data.filter(x => x.status >= 400);

  return {
    links: links.length,
    uniqueLinks: uniqueLinks.size,
    broken: status.length
  }
}

module.exports = callStats;