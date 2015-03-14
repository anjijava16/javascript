define(["module3"], function (mod3) {

    var go = function () {
        return "-- I am in Module2 \n" + mod3.go();
    };

    return { go: go };
});