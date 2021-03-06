const Interpolation = require('../');

const DELTA = 0.0001;

describe('Interpolation', () => {

    it('should exist', () => {
        should(Interpolation).be.ok();
    });

    describe('.interpolateCurve', () => {

        it('should exist', () => {
            should(Interpolation.interpolateCurve).be.ok();
        });

        describe('including one point at the origin', () => {
            var f;
            beforeEach(() => {
                f = Interpolation.interpolateCurve([0, 0]);
            });

            it('should be a function', () => {
                should(f).be.a.Function();
            });

            it('should be always return 0', () => {
                for (let x of [-2, -1, 0, 1, 2]) {
                    should(f(x)).be.approximately(0, DELTA);
                }
            });

        });

        describe('including one point away from origin', () => {
            var f, x, y;
            beforeEach(() => {
                x = 1;
                y = 5;
                f = Interpolation.interpolateCurve([x, y]);
            });
            it('should always return same value', () => {
                for (let x of [-2, -1, 0, 1, 2]) {
                    should(f(x)).be.approximately(y, DELTA);
                }
            });
        });

        describe('including two points', () => {
            var f;
            beforeEach(() => {
                f = Interpolation.interpolateCurve([0, 10], [1, 7]);
            });
            it('should align to first point', () => {
                should(f(0)).be.approximately(10, DELTA);
            });
            it('should align to second point', () => {
                should(f(1)).be.approximately(7, DELTA);
            });
        });

    });

    describe('.interpolateSignal',()=>{

        it('should exist', () => {
            should(Interpolation.interpolateSignal).be.ok();
        });

        describe('including one point at the origin', () => {
            var f;
            beforeEach(() => {
                f = Interpolation.interpolateSignal([0, 0]);
            });

            it('should be a function', () => {
                should(f).be.a.Function();
            });

            it('should be always return 0', () => {
                for (let x of [-2, -1, 0, 1, 2]) {
                    should(f(x)).be.approximately(0, DELTA);
                }
            });

        });

        describe('including one point away from origin', () => {
            var f, x, y;
            beforeEach(() => {
                x = 1;
                y = 5;
                f = Interpolation.interpolateSignal([x, y]);
            });
            it('should always return same value', () => {
                for (let x of [-2, -1, 0, 1, 2]) {
                    should(f(x)).be.approximately(y, DELTA);
                }
            });
        });

        describe('including two points', () => {
            var f;
            beforeEach(() => {
                f = Interpolation.interpolateSignal([0, 10], [1, 7]);
            });
            it('should align to first point', () => {
                should(f(0)).be.approximately(10, DELTA);
            });
            it('should align to second point', () => {
                should(f(1)).be.approximately(7, DELTA);
            });
        });

    });

});
