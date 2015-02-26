var common = require('../common.js');

var commonExportNames = Object.keys(common);
for(var i = 0; i < commonExportNames.length; i++){
  var exportName = commonExportNames[i];
  exports[exportName] = common[exportName];
}

exports.unitCommon1 = function(){
  console.log('unitCommon_1');
};

exports.unitCommon2 = function(){
  console.log('unitCommon_2');
};
