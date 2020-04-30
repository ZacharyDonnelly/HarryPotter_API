import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';

const cache = new InMemoryCache();
const http = new HttpLink({
  uri: 'http://localhost:4000/',
});

const link = ApolloLink.from([http]);

const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true,
});

export default client;
