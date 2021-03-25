import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { graphqlService } from './services';

import './index.css';
// import App from './App';

// import Home from './screens/Home';
import RepoDetails from './screens/RepoDetails';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={graphqlService.client}>
      {/* <Home /> */}
      <RepoDetails />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
