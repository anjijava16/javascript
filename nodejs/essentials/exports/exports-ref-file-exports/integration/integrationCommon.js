var common = require('../common.js');

for(var k in common){
  exports[k] = common[k];
}

exports.integrationCommon1 = function(){
  console.log('integrationCommon_1');
};

exports.integrationCommon2 = function(){
  console.log('integrationCommon_2');
};
