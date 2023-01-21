import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { expressjwt } from 'express-jwt'
import schema from './schema.js'
import data from './db.json' assert { type: "json" }
import require from './adapter.js'
// import { createRequire } from 'node:module'
// const { categories } = createRequire('./db.json')

// const express = require('express')
// const cors = require('cors')
// const { ApolloServer } = require('apollo-server-express')
// const jwt = require('express-jwt')
// const { resolvers, typeDefs } = require('./schema')
// const { categories } = require.resolve('./db.json')

// this is not secure! this is for dev purposes
process.env.JWT_SECRET = process.env.JWT_SECRET || 'somereallylongsecretkey'

const PORT = process.env.PORT || 3500
console.log(PORT)
const app = express()

app.use(cors())

// auth middleware
const auth = expressjwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false,
  algorithms: ["HS256"]
})

// require('./adapter.js')

const server = new ApolloServer({
  introspection: true, // do this only for dev purposes
  playground: true, // do this only for dev purposes
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
  context: ({ req }) => {
    const { id, email } = req.user || {}
    return { id, email }
  }
})

app.use(auth)

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  const { status } = err
  res.status(status).json(err)
}
app.use(errorHandler)
server.start({ app, path: '/graphql' })

app.get('/categories', function (req, res) {
  res.send(data.categories)
})

if (!process.env.NOW_REGION) {
  app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/graphql`)
  })
}

export default app
