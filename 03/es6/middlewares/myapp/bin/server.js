'use strict'

const app = require('express')()

const createError = require('http-errors')

app.use(function (req, res, next) {
    if (!req.two) return next(createError(401, 'Please login to view this page.'))
    next()
})

app.get('/one', (req, res) => {
    
    res.send()
})

app.get('/two', (req, res) => {
    res.send('two')
})



app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})

