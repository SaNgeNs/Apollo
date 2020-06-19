import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-common';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component'

import { apolloClient } from 'ApolloClient';
import App from 'Components/App';

const client = apolloClient(false);

loadableReady(() => ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
));