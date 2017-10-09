const express = require('express')
const models = require('./models')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')
const bodyParser = require('body-parser')

const MONGO_URI = require('./../config')

const app = express()

// Mongo stuff
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI')
}

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI)
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error))

app.use(bodyParser.json())

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

app.use('/', function (req, res, next) {
  res.send('hi')
})

module.exports = app
