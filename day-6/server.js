var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

let users = [];

app.get('/', (req, res) => {
  res.send('<script src="/socket.io/socket.io.js"></script><script>var socket = io();</script><h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('a user disconnected');
  })
  socket.on('system', (data) => {
    //users.push(data.address);
    //console.log(users);
    console.log(data);
  })
  socket.emit('command', 
    {
      status: 'Off',
      lastChanged: Date()
    });
});





http.listen(3000, () => {
  console.log('listening on *:3000');
});