var common = require('../common.js');

var ref = Object.keys(common);
for(var i = 0; i < ref.length; i++){
  var exportName = ref[i];
  exports[exportName] = common[exportName];
}

exports.unitCommon1 = function(){
  console.log('unitCommon_1');
};

exports.unitCommon2 = function(){
  console.log('unitCommon_2');
};
