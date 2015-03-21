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
