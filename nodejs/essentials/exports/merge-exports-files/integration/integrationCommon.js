var common = require('../common.js');

var ref = Object.keys(common);
for(var i = 0; i < ref.length; i++){
  var exportName = ref[i];
  exports[exportName] = common[exportName];
}

exports.integrationCommon1 = function(){
  console.log('integrationCommon_1');
};

exports.integrationCommon2 = function(){
  console.log('integrationCommon_2');
};

