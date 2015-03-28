var common = require('../common.js');

for(var k in common){
  exports[k] = common[k];
}

exports.unitCommon1 = function(){
  console.log('unitCommon_1');
};

exports.unitCommon2 = function(){
  console.log('unitCommon_2');
};
