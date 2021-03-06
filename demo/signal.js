const Interpolation = require('../');

const f = Interpolation.interpolateSignal([-3.14, -2], [0, 0], [3.14, 2]);

var start = -10;
var end = 10;
var inc = 0.5;

for (let x = start; x <= end; x += inc) {
    var y = f(x);
    console.log(`${x}\t${y}`);
}
