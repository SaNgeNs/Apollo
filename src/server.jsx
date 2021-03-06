import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import compression from 'compression';
import { ApolloProvider } from '@apollo/react-common';
import { renderToStringWithData } from "@apollo/react-ssr";
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import fetch from 'node-fetch';

import { apolloClient } from 'ApolloClient';
import App from 'Components/App';

const serverPort = process.env.PORT || 3006;
const path = require('path');
const statsFile = path.resolve('./build/spa/loadable-stats.json');

const minify = require('express-minify');
const uglifyEs = require('uglify-es');

const app = express();

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.use(compression());
app.use(minify({
  cache: false,
  uglifyJsModule: uglifyEs,
  errorHandler: null,
  jsMatch: /js/,
}));
app.use(express.static('build/spa'));

app.get('*', (req, res, next) => {
  const extractor = new ChunkExtractor({
    statsFile,
  });

  const client = apolloClient(true, fetch);

  const context = {};

  const AppContent = (
    <ChunkExtractorManager extractor={extractor}>
      <ApolloProvider client={client}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </ApolloProvider>
    </ChunkExtractorManager>
  );

  renderToStringWithData(AppContent).then((content) => {
    const initialState = client.extract();
    const state = JSON.stringify(initialState).replace(/</g, '\\u003c');
    const scriptTags = extractor.getScriptTags();

    res.status(200);
    res.send(`
       <!doctype html>
       <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Test</title>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>window.__APOLLO_STATE__=${state}</script>
          ${scriptTags}
        </body>
      </html>
    `);
    res.end();
  }).catch((error) => {
    next(error);
  });
});

app.listen(serverPort, () => {
  console.log(`Server on port ${serverPort}`);
});
