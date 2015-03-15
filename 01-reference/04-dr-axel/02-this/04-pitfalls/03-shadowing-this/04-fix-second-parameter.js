/*
 forEach’s second parameter. This method has a second parameter whose value is passed to the callback as this.
 */

'use strict';

var obj = {
  name: 'Jane',
  friends: ['Tarzan', 'Cheeta'],
  loop: function(){
    this.friends.forEach(
      function(friend){
        console.log(this.name + ' knows ' + friend);
      }, this);
  }
};

obj.loop();
