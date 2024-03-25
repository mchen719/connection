/* ARTHUR CODE DEMO DATA BELOW. TRY. Cry. */

const jwt = require('jsonwebtoken')

module.exports = {
  init,
  getIo
}

function init(http) {
  io = require('socket.io')(http)
  io.on('connection', function(socket) {
    console.log("TELL ME THE TRUTH")
  }
  )

}

function getIo() {
  return io
}

function validateToken(token) {
  return new Promise(function(resolve) {
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) resolve(false);
      resolve(decoded.user);
    });
  });
}

// // LAZARIUK TESTING GROUNDS FOR LIVE CHAT FUNCTIONALITY.
// // MUST GO THROUGH THE PACES OF NPM I CORS AND SOCKET.IO   // (and yes you do need to add the period when summoning package)
// // there must be a clientServer folder, parallel to the serverfile.


// // am I going to have to change 'username' to the actual user.id? How do I point toward user.name?
// // you need to make sure that the chat server is complete and allows for external applications to touch it. (cors) you must ensure you're using cors.

// const express = require("express")
// const app = express()
// const http = require("http")
// const socketio = require("socket.io")
// const path = require('path')
// const cors = require("cors");
// const httpserver = http.CreateServer(app)
// let io = socketio(httpserver)

// // must check if http.server has been updated since 2021 in node js docs.
// // how do we populate the messages array correctly with received/sent messages? Am I correct in my interpretation?
// // my server is not alive, what am I missing?


// app.use(cors()); // Arthur did not ultimately need cors in his script. What's vital about this middleware?

// // httpserver.listen(3012, () => {
// //   console.log('Sock it to me!')
// // })

// const rooms = []
// // const usernames = []

// // below: original template code, must follow arthur example instead
// // const io = new Server(server, {
// //   cors: {
// //     origin: "http://localhost:3000",
// //     methods: ["GET", "POST"],
// //   },
// // });

// io.on('connection', function(socket){
//   socket.on('join_room', function(room){
//       rooms[socket.id] = room
//       socket.leaveAll()
//       socket.join(room)
//       io.in(room).emit('receive', 'Server: you entered the chat.')
//       socket.emit('join_room', room)

//   })
//   socket.on('send_message', function(message){
//     io.in(rooms[socket.id]).emit('receive', message)
//   })
//   socket.on('receive_message', function(message){
//     socket.emit('receive', message)
//   })
// })
