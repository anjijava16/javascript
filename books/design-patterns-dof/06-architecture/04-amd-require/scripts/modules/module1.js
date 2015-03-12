define(["module2"], function (mod2) {

    var go = function () {
        alert("- I am in Module1 \n" + mod2.go());
    };

    return { go: go };
});