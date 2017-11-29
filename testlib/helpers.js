const should = require('should');

// custom assertion according to instructions on http://tonylukasavage.com/blog/2014/05/29/custom-assertions-in-should-dot-js/

should.Assertion.add(
    'NameOfAssert',
    function(){

    },
    false, // whether it is a getter as opposed to called method
);