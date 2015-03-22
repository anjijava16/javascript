/*
 You can also enforce the expression context via prefix operators.
 */

// Not operator
!function(){  // open IIFE
  console.log('!IIFE');  // inside IIFE
}();  // close IIFE

// void operator
void function(){  // open IIFE
  console.log('void IIFE');  // inside IIFE
}();  // close IIFE
