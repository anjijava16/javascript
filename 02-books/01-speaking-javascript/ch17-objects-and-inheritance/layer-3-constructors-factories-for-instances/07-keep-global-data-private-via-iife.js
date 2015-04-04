/*
 #Attaching private global data to a singleton object
 You don’t need a constructor to associate an object with private data in an environment.
 The following example shows how to use an IIFE for the same purpose, by wrapping it around a singleton object.
 */
var obj = function(){
  // public
  var self = {
    publicMethod: function(){
      console.log(privateData);
      privateData = 'prd within self.publicMethod';
      privateFunction();
    },
    publicData: 'publicData'
  };

  // private
  var privateData = 'privateData';
  var count = 0;
  function privateFunction(){
    if(count === 1) return;
    count++;
    privateData = 'prd within privateFunction';
    console.log(self.publicData);
    self.publicData = 'pud within privateFunction';
    self.publicMethod();
  }

  return self;
}();

console.log(obj.publicData);
obj.publicMethod();
/*
 publicData
 privateData
 publicData
 prd within privateFunction
 */

/*
 #Keeping global data private to all of a constructor
 Some global data is relevant only for a constructor and the prototype methods. By wrapping an IIFE around both,
 you can hide it from public view. Private Data in Properties with Reified Keys gave an example: t
 he constructor StringBuilder and its prototype methods use the constant KEY_BUFFER, which contains a property key.
 That constant is stored in the environment of an IIFE.
 */
var StringBuilder = function(){
  var KEY_BUFFER = '_StringBuilder_buffer_';
  function StringBuilder(){
    this[KEY_BUFFER] = [];
  }
  StringBuilder.prototype = {
    add: function(str){
      this[KEY_BUFFER].push(str);
    },
    toString: function(){
      return this[KEY_BUFFER].join('');
    }
  };
  return StringBuilder;
}();

var sb = new StringBuilder();
sb.add('Hello');
sb.add(' world!');
console.log(sb.toString());  // Hello world!

/*
 #Attaching global data to a method
 Sometimes you only need global data for a single method.
 You can keep it private by putting it in the environment of an IIFE that you wrap around the method
 */
var obj = {
  method: function(){
    // method-private data
    var invocCount = 0;
    return function(){
      invocCount++;
      console.log('Invocation #' + invocCount);
      return 'result';
    }
  }()
};

console.log(obj.method());
console.log(obj.method());
/*
 Invocation #1
 result
 Invocation #2
 result
 */
