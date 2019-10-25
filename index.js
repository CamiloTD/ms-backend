const { Subject } = require('rxjs');
const { tap } = require('rxjs/operators');

const Sensors = {};

['Accelerometer', 'Gyroscope', 'Magnetometer'].forEach(s => Sensors[s] = new Subject());

module.exports = ({
    
    emit (sensor, data) {
        Sensors[sensor] && Sensors[sensor].next(data)
    },

    listen (sensor) {
        return Sensors[sensor];
    }

});