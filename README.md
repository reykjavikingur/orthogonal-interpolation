# Orthogonal Interpolation

Generates continuous numeric functions that intercept given points.

The functions can be polynomial (representing curves) or periodic (representing signals).


## Usage

```
var Interpolation = require('orthogonal-interpolation');
```


## Interpolate Curve

To create a continuous polynomial function, pass a list of points to `interpolateCurve`:

```
var f = Interpolation.interpolateCurve([x1, y1], [x2, y2], [x3, y3], [x4, y4]);

var y = f(x);
```

The resulting function `f` will include the provided points (for example, `f(x1) === y1`, etc.),
and it will extend to all other real numbers while exhibiting smooth continuity.


## Interpolate Signal

To create a continuous periodic function, pass a list of points to `interpolateSignal`:

```
var f = Interpolation.interpolateSignal([x1, y1], [x2, y2], [x3, y3], [x4, y4]);

var y = f(x);
```

The resulting function `f` will include the provided points (for example, `f(x1) === y1`, etc.),
and it will extend to all other real numbers while exhibiting smooth continuity,
and it will be periodic.


## Details

Curves are interpolated with a polynomial basis: x^0, x^1, x^2, ...

Signals are interpolate with a periodic basis: 1, sin(x), cos(x), sin(2x), cos(2x), sin(3x), cos(3x), etc.


2