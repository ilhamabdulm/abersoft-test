if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const errHandler = require('./middlewares/errorHandler')

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/v1', routes)
  .use(errHandler)

module.exports = app
