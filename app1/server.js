const express = require('express');
const next = require('next');
const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './src' });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  // setting dynamic asset prefix
  app.setAssetPrefix(process.env.ASSETPREFIX || '');
  
  // The basepath rewire middleware - note that req.url is mutable but req.originalUrl isn't, or at least has no effect if mutated
  if (process.env.ASSETPREFIX && process.env.ASSETPREFIX != '') {
    server.use(function(req, res, next) {
      req.url = req.originalUrl.replace(`${process.env.ASSETPREFIX.substr(1)}/`, '');
      next();
    });
  }

  server.use(handler);
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
