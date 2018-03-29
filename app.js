const express = require('express')
const bodyParser = require('body-parser')

require('./database-connection')

const app = express()

app.use(bodyParser.json())

app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)

app.get('/', (req, res, next) => {
    res.render('index')
})

module.exports = app
