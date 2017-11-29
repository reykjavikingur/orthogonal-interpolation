const math = require('mathjs');
const PolynomialBasis = require('./polynomial-basis');
const PeriodicBasis = require('./periodic-basis');

const Interpolation = {

    interpolateCurve(...points) {
        var basis = PolynomialBasis.create();
        var interpolate = create(basis);
        return interpolate(...points);
    },

    interpolateSignal(...points) {
        var basis = PeriodicBasis.create();
        var interpolate = create(basis);
        return interpolate(...points);
    },

};

function create(basis) {
    if (!basis || typeof basis !== 'function') {
        throw new Error('An interpolation must have a basis, such as one created with PolynomialBasis.');
    }
    const interpolate = (...points) => {
        if (points.length < 1) {
            throw new Error('You must provide at least one point to interpolate.');
        }
        for (let point of points) {
            if (!point || !Array.isArray(point) || point.length !== 2) {
                throw new Error('Each point to interpolate must have exactly 2 values, one for input and another for output.');
            }
        }
        const base = points.map((point, n) => basis(n));
        const xMatrix = points.map(point => {
            var x = point[0];
            return base.map(b => b(x));
        });
        const yVector = points.map(point => {
            var y = point[1];
            return y;
        });
        const xMatrixInverse = math.inv(xMatrix);
        const coefficientVector = math.multiply(xMatrixInverse, yVector);
        return (x) => {
            var y = 0;
            for (let n in base) {
                let b = base[n];
                let c = coefficientVector[n];
                y += c * b(x);
            }
            return y;
        };
    };
    return interpolate;
}

module.exports = Interpolation;
