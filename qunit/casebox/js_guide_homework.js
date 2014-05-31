module('js_guide_homework');

test("js definitive guide chapter 3", function() {

    equal(valExists("abcdefg"), true, 'existance check 1');
    equal(valExists("abcdefg2"), false, 'existance check 2');
    equal(valExists("abc"), true, 'existance check 3');
    equal(valUndefined("abcdefg"), true, 'undefine check 1');
    equal(valUndefined("abc"), false, 'undefine check 2');
    equal(valUndefined("abc2"), true, 'undefine check 3');
});



test("js definitive guide chapter 4", function() {
    var manager;
    var withNew = false;
    try {
        manager = StateManager();
    } catch (ex) {
       withNew = true;
    }
    equal(withNew, true, 'StateManager invoked without "new" did not fire an exception!');

    manager = new StateManager();

    manager.setState('a', true);
    manager.setState('b', true);
    manager.setState('c', false);
    manager.setState('d', true);
    manager.setState('e', true);


    equal(manager.getState('a'), true, 'getState a');
    equal(manager.getState('b'), true, 'getState b');
    equal(manager.getState('c'), false, 'getState c');
    equal(manager.multiStatesMatcher(['a', 'b', 'c'], true), false, 'multiStatesMatcher test 1');

    manager.setState('c', true);
    equal(manager.multiStatesMatcher(['a', 'b', 'c'], true), true, 'multiStatesMatcher test 2');

    manager.setState('d', false);
    manager.setState('e', false);

    equal(manager.multiStatesMatcher(['d', 'e'], false), true, 'multiStatesMatcher test 3');

    equal(manager.getState('undef', false, 'undefined state get should return false'));

    var manager2 = new StateManager();
    equal(manager2.getState('a'), false, 'manager1 should not affect on manager2 test 1');
    equal(manager2.getState('b'), false, 'manager1 should not affect on manager2 test 2');

});
