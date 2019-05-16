const routes = require('next-routes');

const basePathRoute = (route) => {
  if (process.env.ASSETPREFIX && process.env.ASSETPREFIX != '') {
    return `${process.env.ASSETPREFIX}${(route === '/') ? '' : route}`;
  }
  return route;
}

module.exports = routes()
  .add(basePathRoute('/'), 'index')
  .add(basePathRoute('/page-app3'), 'page-app3');
