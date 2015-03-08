var lender = {
  giveName: function (first, last) {
    this.first = first;
    this.last = last;
  }
};

var borrower = {
  name: "borrower-name"
};

console.log(borrower.name);

//lender.giveName.apply(borrower, ["Tom", "apply()"]);
lender.giveName.call(borrower, "Tom", "call()");  // the built-in function called "call" does the same (not array, a series of arguments.

console.log(borrower.first + " " + borrower.last);
