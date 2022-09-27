const express = require('express')
const app = express()
const path = require('path')
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

const server = http.createServer(app)

const io = new Server(server)

//listening to events on the server in the client side
io.on('connection', (socket) => {
  console.log('User Connected', socket.id)

  socket.on('join_room', (data) => {
    socket.join(data)
    console.log(`User with ID: ${socket.id} joined room: ${data}`)
  })

  socket.on('send_message', (data) => {
    socket.broadcast.emit('receive_message', data)
  })
  socket.on('disconnect', () => {
    console.log('User Disconnected', socket.id)
  })
})

module.exports = server
