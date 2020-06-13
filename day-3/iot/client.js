const http = require('http');
const io = require('socket.io-client');
let socket = io.connect('http://localhost:3000');

socket.on('connect', () => {
    console.log("socket connected");
})

socket.emit('news', {hello: 'world'});