const { Subject } = require('rxjs');
const { tap } = require('rxjs/operators');

const accelerometer = new Subject();

module.exports = ({
    
    Mobile: {
        Accelerometer ({ x, y, z }) {
            accelerometer.next({ x, y, z });
        }
    },

    Accelerometer () {
        return accelerometer.pipe(tap(() => 0));
    }

});