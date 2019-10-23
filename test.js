const { Socket } = require('unete-io');

const API = Socket('https://localhost:1050');

API.Accelerometer().then(accelerometer => {
    accelerometer.subscribe(console.log);
}).catch(console.log);