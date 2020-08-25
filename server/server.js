const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.use(router);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
});
