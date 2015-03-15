/*
 that = this. Assign this to a variable that isn’t shadowed (another popular name is self) and use that one.
 */

'use strict';

var obj = {
  name: 'Jane',
  friends: ['Tarzan', 'Cheeta'],
  loop: function(){
    var that = this;
    this.friends.forEach(
      function(friend){
        console.log(that.name + ' knows ' + friend);
      }
    );
  }
};

obj.loop();
