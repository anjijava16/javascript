(function(){
  console.log("watch out!");
})();

(function(){
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var today = new Date();
  console.log(today.getDay());
  var msg = "Today is " + days[today.getDay()] + ', ' + today.getDate();
  console.log(msg);
})();
