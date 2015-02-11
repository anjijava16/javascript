var result = (function(){
  return 2 + 2;
})();

console.log(result);

// Immediate function can be used to define object properties.
var o = {
  message: (function () {      // immediate function defines object property
    var who = "me", what = "call";
    return what + " " + who; }()),
  getMsg: function () {
    return this.message; }
};
// usage
console.log(o.getMsg()); // "call me"
console.log(o.message); // "call me"
