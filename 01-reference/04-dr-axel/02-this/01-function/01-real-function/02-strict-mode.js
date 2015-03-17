/*
 Strict mode: this has the value undefined.
 */
function strictFunc(){
  'use strict';
  console.log(this === undefined);  // true
}
strictFunc();
