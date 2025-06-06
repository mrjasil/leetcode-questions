/**
 * @return {Function}
 */
var createHelloWorld = function(a) {
    a="Hello"
    return function(b) {
        b=" World"
        return a+b
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */