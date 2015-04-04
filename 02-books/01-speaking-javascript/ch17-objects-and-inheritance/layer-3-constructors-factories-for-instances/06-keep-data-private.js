/*
 #Private Data in the Environment of a Constructor (Crockford Privacy Pattern)
 When a constructor is invoked, two things are created: the constructor’s instance and an environment.
 The instance is to be initialized by the constructor. The environment holds the constructor’s parameters and local variables.
 Every function (which includes methods) created inside the constructor will retain a reference to the environment—the environment in which it was created.
 Thanks to that reference, it will always have access to the environment, even after the constructor is finished.
 This combination of function and environment is called a closure (Closures: Functions Stay Connected to Their Birth Scopes).
 The constructor’s environment is thus data storage that is independent of the instance and related to it only because the two are created at the same time.
 To properly connect them, we must have functions that live in both worlds. Using Douglas Crockford’s terminology,
 an instance can have three kinds of values associated with it (see Figure 17-4):

 ##Public properties
 Values stored in properties (either in the instance or in its prototype) are publicly accessible.

 ##Private values
 Data and functions stored in the environment are private—only accessible to the constructor and to the functions it created.

 ##Privileged methods
 Private functions can access public properties, but public methods in the prototype can’t access private data.
 We thus need privileged methods—public methods in the instance. Privileged methods are public and can be called by everyone,
 but they also have access to private values, because they were created in the constructor.
 */
function StringBuilder(){
  var buffer = [];
  this.add = function(str){  // Privileged methods - it has access to everything inside of constructor
    buffer.push(str);
  };
  this.toString = function(){  // Privileged methods - it has access to everything inside of constructor
    return buffer.join('');
  };
}
// Can't put methods in the prototype!

var sb = new StringBuilder();
sb.add('Hello');
sb.add(' world!');
console.log(sb.toString());  // Hello world!

/*
 #Private Data in Properties with Marked Keys
 For most non-security-critical applications, privacy is more like a hint to clients of an API: “You don’t need to see this.”
 That’s the key benefit of encapsulation—hiding complexity. Even though more is going on under the hood, you only need to understand the public part of an API.
 The idea of a naming convention is to let clients know about privacy by marking the key of a property. A prefixed underscore is often used for this purpose.
 */
function MStringBuilder(){
  this._buffer = [];
}
MStringBuilder.prototype = {
  constructor: MStringBuilder,
  add: function(str){
    this._buffer.push(str);
  },
  toString: function(){
    return this._buffer.join('');
  }
};
var msb = new MStringBuilder();
msb.add('Hello');
msb.add(' world!');
console.log(msb.toString());  // Hello world!

/*
 #Private Data in Properties with Reified Keys
 One problem with a naming convention for private properties is that keys might clash
 (e.g., a key from a constructor with a key from a subconstructor, or a key from a mixin with a key from a constructor).
 You can make such clashes less likely by using longer keys, that, for example, include the name of the constructor.
 Then, in the previous case, the private property _buffer would be called _StringBuilder_buffer.
 If such a key is too long for your taste, you have the option of reifying it, of storing it in a variable.
 */
var RStringBuilder = function(){
  var KEY_BUFFER = '_StringBuilder_buffer';
  function StringBuilder(){
    this[KEY_BUFFER] = [];
  }
  StringBuilder.prototype = {
    constructor: StringBuilder,
    add: function(str){
      this[KEY_BUFFER].push(str);
    },
    toString: function(){
      return this[KEY_BUFFER].join('');
    }
  };
  return StringBuilder;
}();

var rsb = new RStringBuilder();
rsb.add('Hello');
rsb.add(' world!');
console.log(rsb.toString());  // Hello world!
