const macaddress = require('macaddress');

class Monitor {
    
    constructor() {
        name = 'test';
        address = macaddress.one.then((err, mac) => {
            return mac;
        });
        userPreferences = {
            preferredTemp: 78,
            currentTemp: 72,
            tempUnit: 'F',
            status: 'On'
        }
        
        lastChanged = Date();
    }

    setNewUserPreferences = (object) => {

        let acceptedKeys = ['name', 'preferredTemp', 'tempUnit', 'status'];

        for(key in acceptedKeys) {
            if(object[key] !== undefined) {
                this.userPreferences[key] = object[key];
                console.log(key + ' has been updated to: ');
            }
        }
        this.lastChanged = Date();
        console.log('Changes finished at: ' + this.lastChanged);
    }
}

module.exports = {
    Monitor
}