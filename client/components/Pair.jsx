import React, { useState } from 'react'
import io from 'socket.io-client'
import Chat from './Chat'

const socket = io.connect()
function Pair() {
  const [username, setUsername] = useState('')

  const [showChat, setShowChat] = useState(false)

  function joinRoom() {
    setShowChat(true)
  }

  return (
    <div>
      <div className="">
        {!showChat ? (
          <>
            <h3 className="">Join a chat</h3>
            <input
              type="text"
              name="name"
              placeholder="Enter your name..."
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={(e) => {
                e.key === 'Enter' && setUsername(e.target.value) && joinRoom()
              }}
            />

            <button onClick={joinRoom}>Join a room</button>
          </>
        ) : (
          <Chat socket={socket} username={username} />
        )}
      </div>
    </div>
  )
}

export default Pair
