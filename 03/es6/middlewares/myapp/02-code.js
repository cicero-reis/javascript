'use strict'

const app = require('express')()

const requestTime = function (req, res, next) {
    
    req.requestTime = Date.now();

    next();

};

app.use(requestTime);

app.get('/', function (req, res) {

    res.send({
        'message': 'Hello World',
        'request': req.requestTime
    })
})

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000')
})