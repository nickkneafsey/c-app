const express = require('express')
const models = require('./models') // This line is needed even though standard complains
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')
const bodyParser = require('body-parser')

const AuthService = require('./services/auth')
const MONGO_URI = require('./../config').mongoUri

const app = express()

if (!MONGO_URI) { throw new Error('No mlab uri') }

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI, { server: { reconnectTries: 1 } }) // Number.MAX_VALUE will continuously retry
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error))

app.use(bodyParser.json())

app.post('/auth', AuthService.generateToken)

app.use('/graphql', AuthService.checkToken, graphqlHTTP({
  schema,
  graphiql: true
}))

app.use('/', function (req, res, next) {
  res.send('hi')
})

module.exports = app
