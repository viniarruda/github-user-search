import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from '@apollo/client';
import {graphqlService} from './services';

import './index.css';
// import App from './App';

import Home from './screens/Home';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={graphqlService.client}>
      <Home />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
