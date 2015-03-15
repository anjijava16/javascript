/*
 Use bind() to create a function whose this always has the correct value
 */

'use strict';

var obj = {
  name: 'Jane',
  friends: ['Tarzan', 'Cheeta'],
  loop: function(){
    this.friends.forEach(
      function(friend){
        console.log(this.name + ' knows ' + friend);
      }.bind(this)
    );
  }
};

obj.loop();
