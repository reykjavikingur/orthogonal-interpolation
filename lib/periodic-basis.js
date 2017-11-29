const PeriodicBasis = {

    create() {
        return n => {
            if (isNaN(n) || n !== Math.round(n)) {
                throw new Error('Periodic basis functions are defined only per natural numbers.');
            }
            if (n === 0) {
                return x => 0.5;
            }
            else if (n % 2 === 1) {
                // n=1 : sin1, n=3 : sin2, n=5 : sin3, n=7 : sin4
                const c = (n + 1) / 2;
                return x => Math.sin(c * x);
            }
            else {
                // n=2 : cos1, n=4 : cos2, n=6 : cos3, n=8 : cos4
                const c = n / 2;
                return x => Math.cos(c * x);
            }
        };
    }

};

module.exports = PeriodicBasis;
