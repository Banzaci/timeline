import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './store';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import './index.css';

import App from './components/app';

import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

ReactDOM.render(
  <ApolloProvider client={ client } >
    <Provider>
      <App />
    </Provider>
  </ApolloProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// https://itnext.io/server-side-rendering-with-react-redux-and-react-router-fa5b67d4965e
