var Parallel = require('paralleljs');

var p = new Parallel('forwards');

// Spawn a remote job (we'll see more on how to use then later)
p.spawn(function (data) {
    data = data.reverse();

    console.log(data); // logs sdrawrof

    return data;
}).then(function (data) {
    console.log(data) // logs sdrawrof
});
