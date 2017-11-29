const PolynomialBasis = require('../lib/polynomial-basis');

describe('PolynomialBasis', () => {

    it('should exist', () => {
        should(PolynomialBasis).be.ok();
    });

    describe('instance', () => {

        var basis, xs, delta;

        beforeEach(function () {
            xs = [-2, -1, 0, 1, 2];
            delta = 0.000001;
            basis = PolynomialBasis.create();
        });

        it('should be a function', () => {
            should(basis).be.a.Function();
        });

        describe('0th', () => {
            var p;
            beforeEach(() => {
                p = basis(0);
            });

            it('should be constant', () => {
                for (let x of xs) {
                    should(p(x)).be.approximately(1, delta);
                }
            });
        });

        describe('1st', () => {
            var p;
            beforeEach(() => {
                p = basis(1);
            });

            it('should be linear', () => {
                for (let x of xs) {
                    should(p(x)).be.approximately(x, delta);
                }
            });
        });

        describe('2nd', () => {
            var p;
            beforeEach(() => {
                p = basis(2);
            });

            it('should be quadratic', () => {
                for (let x of xs) {
                    should(p(x)).be.approximately(x * x, delta);
                }
            });
        });
        describe('3rd', () => {
            var p;
            beforeEach(() => {
                p = basis(3);
            });

            it('should be cubic', () => {
                for (let x of xs) {
                    should(p(x)).be.approximately(x * x * x, delta);
                }
            });
        });

    });

});
