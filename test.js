const { map, pairwise } = require('rxjs/operators');
const { default: netlib } = require('/Users/camilotorres/Projects/xnet/build');

const API  = netlib('ios://dev-api.dexfreight.io:1050');
const plot = netlib('fs:///Users/camilotorres/Projects/magic-show/backend/plot.py')("X", "Y", "Z");

(async () => {
    const acceleration = await API.Accelerometer();
    
    acceleration.subscribe(({ x, y, z }) =>  plot.input.next(`${x} ${y} ${z}`));
})();