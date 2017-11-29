const Interpolation = require('../');

const f = Interpolation.interpolateCurve([-1, 0], [0, 1], [1, 0]);

var start = -10;
var end = 10;
var inc = 0.5;

for (let x = start; x <= end; x += inc) {
    var y = f(x);
    console.log(`${x}\t${y}`);
}
