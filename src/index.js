import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./conponents/App";

import {
  ApolloClient,
  InMemoryCache,
  // HttpLink,
  ApolloProvider,
} from "@apollo/client";

const GRAPHQL_ENDPOINT = "https://young-savannah-06405.herokuapp.com/";

const cache = new InMemoryCache({
  addTypename: false,
  resultCaching: false,
});
const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
