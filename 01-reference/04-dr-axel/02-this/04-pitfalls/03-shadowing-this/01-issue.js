/*
 When you use a real function inside a method, it is easy to forget that the former has its own this.
 Therefore, you can’t refer from the former to the method’s this, because it is shadowed
 */

'use strict';

var obj = {
  name: 'Jane',
  friends: ['Tarzan', 'Cheeta'],
  loop: function(){
    this.friends.forEach(
      function(friend){
        console.log(this.name + ' knows ' + friend);
      }
    );
  }
};

obj.loop();
// TypeError: Cannot read property 'name' of undefined
