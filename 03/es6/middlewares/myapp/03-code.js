'use strict'

const app = require('./bin/server')

app.get('/', function (req, res) {

    res.send('Hello World')
})