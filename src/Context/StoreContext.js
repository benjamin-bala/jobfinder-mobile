import { useReducer } from 'react';
import { reducer, initialState } from '../store';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Context } from './index';
import { font, metrics, colors } from '../theme';
import { ADMIN_SECRET } from '../env';

const client = new ApolloClient({
  uri: 'https://useful-haddock-65.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': ADMIN_SECRET,
  },
  cache: new InMemoryCache(),
});

export default function StoreContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch, font, metrics, colors };

  return (
    <Context.Provider value={value}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </Context.Provider>
  );
}
