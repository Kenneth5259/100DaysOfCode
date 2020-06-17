const io = require('socket.io-client');
const macaddress = require('macaddress');
const Monitor = require('./model/monitor');

let socket = io.connect('http://localhost:3000');


socket.on('connect', () => {
    let currentMonitor = new Monitor();
    socket.emit('system', {   
        address: currentMonitor.address,
        status: currentMonitor.status,
        name: currentMonitor.name,
        currentTemp: currentMonitor.currentTemp,
        preferredTemp: currentMonitor.preferredTemp,
        tempUnit: currentMonitor.tempUnit,
        lastChanged: currentMonitor.lastChanged
    }); 
    socket.on('command', (data) => {
        for(let [key, value] of Object.entries(data)) {
            console.log(key, value);
        }
    })
});
