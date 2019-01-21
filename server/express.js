'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const ALLOWED_ORIGINS = [
    'http://localhost:8080',
    'http://localhost:3000',
]

const allowCrossMiddleware = function (req, res, next) {
    const {origin} = req.headers
    if (ALLOWED_ORIGINS.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin)
    }
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
}

const app = express()

app.use(express.static(__dirname + '/assets'))
app.use(bodyParser.json())
app.use(allowCrossMiddleware)

module.exports = app
