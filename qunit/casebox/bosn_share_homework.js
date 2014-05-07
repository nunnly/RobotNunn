module('bosn_share_homework');

test("bosn share homework 1, data type", function() {
    var exist = typeof typeOfParam;

    // empty function
    function T__1 () {
    }

    ok(exist, 'typeOfParam existance check');
    if (exist) {
        equal(typeOfParam(12345), 'number', 'number check');
        equal(typeOfParam(true), 'boolean', 'boolean check');
        equal(typeOfParam("test"), 'string', 'string check');
        equal(typeOfParam({}), 'object', 'object check');
        equal(typeOfParam(null), 'null', 'null check');
        equal(typeOfParam(undefined), 'undefined', 'undefined check');
        var obj = new T__1();
        equal(typeOfParam(obj), 'T__1', 'customized class check');
        equal(typeOfParam(T__1), 'function', 'function check');
    }
});
