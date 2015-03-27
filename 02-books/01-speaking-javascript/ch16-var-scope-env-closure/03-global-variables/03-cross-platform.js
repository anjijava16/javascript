/*
 Cross-Platform Considerations
 Browsers and Node.js have global variables for referring to the global object. Unfortunately, they are different:

 Browsers include window, which is standardized as part of the Document Object Model (DOM), not as part of ECMAScript 5.
 There is one global object per frame or window.

 Node.js contains global, which is a Node.js-specific variable.
 Each module has its own scope in which this points to an object with that scope’s variables.
 Accordingly, this and global are different inside modules.
 */
(function(glob){
  // glob points to global object
  console.log(glob);  // node global
}(typeof window !== 'undefined' ? window : global));
