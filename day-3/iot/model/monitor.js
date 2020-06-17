const macaddress = require('macaddress');

class Monitor {
    
    constructor() {
        name = 'test';
        address = macaddress.one.then((err, mac) => {
            return mac;
        });
        preferredTemp = 78;
        currentTemp = 72;
        tempUnit = 'F';
        status = 'On';
        lastChanged = Date();
    }
}

module.exports = {
    Monitor
}