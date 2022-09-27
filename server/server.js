const express = require('express')
const path = require('path')

const teamRoutes = require('./routes/teamHistory')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/teamHistory', teamRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

module.exports = server
