/*
 Sloppy mode: this refers to the global object (window in browsers).
 */
function sloppyFunc(){
  //console.log(this === window);  // true - browser - window is global object
  console.log(this === global);    // true - nodejs - global is global object
}
sloppyFunc();
