'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const redis = require('redis')
const io = require('socket.io')

const SERVER_PORT = 3000
const REDIS_PORT = 6379
const CLIENT_PORT = 8080

let socketServer

const redisClient = redis.createClient({
    host: 'localhost',
    port: REDIS_PORT,
    retry_strategy: () => 1000,
})
redisClient.on('error', err => {
    console.error('Error: ' + err)
})
redisClient.monitor()
redisClient.on('monitor', function (time, args) {
    socketServer.emit('newEvent', {time, args})
})

const allowCrossMiddleware = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', `http://localhost:${CLIENT_PORT}`)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
}

const app = express()

app.use(express.static(__dirname + '/assets'))
app.use(bodyParser.json())
app.use(allowCrossMiddleware)

app.post('/data', function (req, res) {
    redisClient.rpush(['data', JSON.stringify(req.body)], function (err, index) {
        socketServer.emit('addedData', {...req.body, index})
    })
    res.status(200).send()
})

const httpServer = app.listen(SERVER_PORT, () => console.log(`Application is listening on port ${SERVER_PORT}!`))
socketServer = io.listen(httpServer)

socketServer.on('connection', socket => {
    console.log('A user is connected, send available data...')
    redisClient.lrange('data', 0, -1, function (err, reply) {
        const data = reply.map(JSON.parse).map((item, id) => ({...item, id}))
        socket.emit('initialData', data)
    })
})
