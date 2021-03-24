import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
// import fetch from 'cross-fetch';

import queries from './queries';
import config from '../../config';

const httpLink = createHttpLink({
  uri: config.API_URL,
});

const authLink = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  const token = 'e97ef83f5f0ad9307eef5fc29478cb38f575dbe4';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default {
  client,
  queries,
};
