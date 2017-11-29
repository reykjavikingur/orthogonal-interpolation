const PolynomialBasis = {
    create() {
        return (n) => {
            return (x) => {
                return Math.pow(x, n);
            };
        };
    }
};

module.exports = PolynomialBasis;
