// Lazy initialization occurs when an object is lazily loaded.
// Initially the object will be null or undefined.
// When requesting the object the code checks if the object exists and if it doesn't then it loads it and returns its reference.

var employee = {
  name: "Victor",
  salaryHistory: null,
  getSalaryHistory: function(){
    if(this.salaryHistory === null){     // Lazy initialization
      this.salaryHistory = this.initializeHistory();
    }
    return this.salaryHistory;
  },

  initializeHistory: function(){
    var history = {};
    history [2009] = "$34,000";
    history [2010] = "$36,500";
    history [2011] = "$44,000";
    history [2012] = "$45,500";
    history [2013] = "$51,000";
    return history;
  }
};

var history = employee.getSalaryHistory();
console.log("2010: " + history[2010]);
