'use strict';

var obj = {
  name: 'Jane',
  friends: ['Tarzan', 'Cheeta'],
  loop: function(){
    this.friends.forEach(
      function(friend){  // it is a function
        console.log(this.name + ' knows ' + friend);  // the function tries to access the method's this
      }
    )
  }
};

try{
  obj.loop();
}
catch(e){
  console.log(e);  // [TypeError: Cannot read property 'name' of undefined]
}

/*
 #Workaround 1: that = this
 We assign this to a variable that won’t be shadowed inside the nested function.
 */
obj.loop = function(){
  var that = this;
  this.friends.forEach(function(friend){
    console.log(that.name + ' knows ' + friend);
  })
};
obj.loop();
/*
 Jane knows Tarzan
 Jane knows Cheeta
 */

/*
 #Workaround 2: bind()
 We can use bind() to give the callback a fixed value for this-namely, the method's this.
 */
obj.loop = function(){
  this.friends.forEach(function(friend){
    console.log(this.name + 'knows ' + friend);
  }.bind(this))
};
obj.loop();
/*
 Jane knows Tarzan
 Jane knows Cheeta
 */

/*
 #Workaround 3: a thisValue for forEach()
 A workaround that is specific to forEach() is to provide a second parameter after the callback that becomes the this of the callback.
 */
obj.loop = function(){
  this.friends.forEach(function(friend){
    console.log(this.name + ' knows ' + friend);
  }, this);
};
obj.loop();
/*
 Jane knows Tarzan
 Jane knows Cheeta
 */
