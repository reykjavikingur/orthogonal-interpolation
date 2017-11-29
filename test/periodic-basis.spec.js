const PeriodicBasis = require('../lib/periodic-basis');

const DELTA = 0.00001;

describe('PeriodicBasis', () => {
    it('should exist', () => {
        should(PeriodicBasis).be.ok();
    });

    describe('instance', () => {
        var basis, xs;
        beforeEach(() => {
            basis = PeriodicBasis.create();
            xs = [];
            for (let x = -10; x <= 10; x += 1) {
                xs.push(x);
            }
        });

        it('should be a function', () => {
            should(basis).be.a.Function();
        });

        describe('0th', () => {
            var base;
            beforeEach(() => {
                base = basis(0);
            });

            it('should be a function', () => {
                should(base).be.a.Function();
            });

            it('should return constant value', () => {
                for (let x of xs) {
                    should(base(x)).be.approximately(1, DELTA);
                }
            });
        });

        describe('1st', () => {
            var base;
            beforeEach(() => {
                base = basis(1);
            });
            it('should be sine', () => {
                for (let x of xs) {
                    should(base(x)).be.approximately(Math.sin(x), DELTA);
                }
            });
        });

        describe('2nd', () => {
            var base;
            beforeEach(() => {
                base = basis(2);
            });
            it('should be cosine', () => {
                for (let x of xs) {
                    should(base(x)).be.approximately(Math.cos(x), DELTA);
                }
            });
        });

        describe('3rd', () => {
            var base;
            beforeEach(() => {
                base = basis(3);
            });
            it('should be sine 2', () => {
                for (let x of xs) {
                    should(base(x)).be.approximately(Math.sin(2 * x), DELTA);
                }
            });
        });

        describe('4th', () => {
            var base;
            beforeEach(() => {
                base = basis(4);
            });
            it('should be cosine 2', () => {
                for (let x of xs) {
                    should(base(x)).be.approximately(Math.cos(2 * x), DELTA);
                }
            });
        });

        describe('5th', () => {
            var base;
            beforeEach(() => {
                base = basis(5);
            });
            it('should be sine 3', () => {
                for (let x of xs) {
                    should(base(x)).be.approximately(Math.sin(3 * x), DELTA);
                }
            });
        });

        describe('6th', () => {
            var base;
            beforeEach(() => {
                base = basis(6);
            });
            it('should be cosine 3', () => {
                for (let x of xs) {
                    should(base(x)).be.approximately(Math.cos(3 * x), DELTA);
                }
            });
        });

    });

});