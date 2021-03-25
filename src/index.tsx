import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import { graphqlService } from './services';

import { theme } from './components';

import Root from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={graphqlService.client}>
      <ThemeProvider theme={theme.defaultTheme}>
        <Root />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
