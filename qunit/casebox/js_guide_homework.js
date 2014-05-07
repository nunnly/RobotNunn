module('js_guide_homework');

test("js definitive guide chapter 3", function() {
    var abcdefg;
    var abc = 300;
    equal(valExists("abcdefg"), true, 'existance check 1');
    equal(valExists("abcdefg2"), false, 'existance check 2');
    equal(valExists("abc"), true, 'existance check 3');

    equal(valUndefined("abcdefg"), true, 'undefine check 1');
    equal(valUndefined("abc"), false, 'undefine check 2');
    equal(valUndefined("abc2"), true, 'undefine check 3');
});

