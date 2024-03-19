// LAZARIUK TESTING GROUNDS FOR LIVE CHAT FUNCTIONALITY.
// MUST GO THROUGH THE PACES OF NPM I CORS AND SOCKET.IO   // (and yes you do need to add the period when summoning package)
// there must be a clientServer folder, parallel to the serverfile.


const express = require("express");
const app = express(); // This must be especially examined with refactoring in mind. Must not conflict with app-server/
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
