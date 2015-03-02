var package = {
  "name": "application-name",
  "version": "0.0.1",
  "devDependencies": {
    "mocha": "^2.1.0"
  }
}

function iterateOptions(options){
  if(options !== null && typeof options === 'object') {
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        var value = options[key];
        console.log('key=' + key + ', value=' + value);
        if (value !== null && typeof value === 'object') {
          iterateOptions(value);
        }
      }
    }
  }
}

iterateOptions(package);
iterateOptions('test');  // nothing happens
