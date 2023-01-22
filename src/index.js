import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

import App from './App'

const client = new ApolloClient({
  uri: ''
})

const container = document.getElementById('app')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(<App />)
