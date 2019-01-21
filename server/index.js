'use strict'

const io = require('socket.io')

const server = require('./express')
const createRedisClient = require('./redis-client')

const redisClient = createRedisClient()

const SERVER_PORT = 3000

let socketServer

redisClient.monitor()
redisClient.on('monitor', function (time, args) {
    socketServer.emit('newEvent', {time, args})
})

server.post('/data', function (req, res) {
    redisClient.rpush(['data', JSON.stringify(req.body)], function (err, index) {
        socketServer.emit('addedData', {...req.body, index})
    })
    res.status(200).send()
})

const httpServer = server.listen(SERVER_PORT, () => console.log(`Application is listening on port ${SERVER_PORT}!`))
socketServer = io.listen(httpServer)

socketServer.on('connection', socket => {
    console.log('A user is connected, send available data...')
    redisClient.publish('login', new Date().getTime())

    redisClient.lrange('data', 0, -1, function (err, reply) {
        const data = reply.map(JSON.parse).map((item, id) => ({...item, id}))
        socket.emit('initialData', data)
    })
})
