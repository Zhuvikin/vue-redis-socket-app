'use strict'

const redis = require('redis')

const REDIS_PORT = 6379

const redisClient = redis.createClient({
    host: 'localhost',
    port: REDIS_PORT,
    retry_strategy: () => 1000,
})
redisClient.on('error', err => {
    console.error('Error: ' + err)
})

module.exports = redisClient
