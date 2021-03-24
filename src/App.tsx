import React from 'react';
import {useQuery} from '@apollo/client';

import logo from './logo.svg';
import './App.css';

import {graphqlService} from './services';

function App() {
  const {loading, data, error} = useQuery(
    graphqlService.queries.GET_USER_INFO,
    {
      variables: {
        login: 'viniarruda',
      },
    }
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
