var MYAPP = MYAPP || {};
MYAPP.getCustomers = function(type){
  var names = ["Bill", "Will"];
  return names.map(function(item){
    return {name: item, type: type}
  })
};

module.exports = MYAPP;
