/*
 Optional Named Parameters
 Optional positional parameters work well only if they are omitted at the end.
 Anywhere else, you have to insert placeholders such as null so that the remaining parameters have correct positions.
 With optional named parameters, that is not an issue. You can easily omit any of them. Here are some examples.
 selectEntries(start=3, end=20, step=2)  # Python syntax
 # Python syntax
 selectEntries(step=2)
 selectEntries(end=20, start=3)
 selectEntries()

 Simulating Named Parameters in JavaScript
 */
function selectEntries(options){
  options = options || {};
  var start = options.start || 'default';
  var end = options.end || 'default';
  var step = options.step || 'default';
  console.log(start, end, step);
}

selectEntries({start: 3, end: 20, step: 2});  // { start: 3, end: 20, step: 2 }
selectEntries({step: 2});
selectEntries({end: 20, start: 3});
selectEntries();

/*
  You can also combine positional parameters with named parameters.
    someFunc(posArg1, posArg2, { namedArg1: 7, namedArg2: true });
 */
