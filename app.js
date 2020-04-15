const express = require('express')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
const cors = require('cors')

const graphQlSchema = require('./graphql/schema')
const isAuth = require('./middleware/is-auth')
require('dotenv').config()

const app = express()
mongoose.Promise = global.Promise

// TODO: cane add permission handle for open routes
// app.use(isAuth)

mongoose.Promise = global.Promise
mongoose.set('debug', true)
app.use(cors())
app.use(bodyParser.json())
app.use(expressValidator())


app.use('/graphql', graphqlHTTP({
  schema: graphQlSchema,
  context: () => ({ id: 1 }),
  graphiql: true,
}))


mongoose
  .connect(
    `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@ds241012.mlab.com:41012/${process.env.MONGO_DB}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Successfully connect to the DB')
    app.listen(process.env.PORT, (res, err) => {
      if (err) {
        console.log(`something went wrong: ${err.message}`)
      }
      console.log(`Connect to the Server on port: ${process.env.PORT}`)
    })
  })
  .catch(err => {
    console.log(err)
  })
