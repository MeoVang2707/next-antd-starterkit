/* eslint-disable no-console */

const express = require('express');
const next = require('next');
const opn = require('opn');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

function getBrowserApplication() {
  let browser;
  switch (process.platform) {
    case 'darwin': // mac
      browser = 'google chrome';
      break;
    case 'linux': // linux
      browser = 'google-chrome';
      break;
    case 'win32': // windows
    case 'win64':
      browser = 'chrome';
      break;
    default:
      break;
  }
  return browser;
}

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/test/:shopId', (req, res) => {
      const actualPage = '/about';
      const queryParams = { shopId: req.params.shopId };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
      if (dev) {
        opn(`http://localhost:${PORT}`, { app: getBrowserApplication() });
      }
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });
