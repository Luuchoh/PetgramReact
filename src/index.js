import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import App from './routes/App'

const client = new ApolloClient({
  uri: 'http://localhost:3500/graphql',
  cache: new InMemoryCache()
})

const container = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
