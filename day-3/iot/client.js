const http = require('http');
const io = require('socket.io-client');
const macaddress = require('macaddress');

let socket = io.connect('http://localhost:3000');


socket.on('connect', () => {
    macaddress.one((err, mac) => {
        if(!err) {
            socket.emit('user', {address: mac}); 
        }
        
    })
});

socket.emit('news', {hello: 'world'});