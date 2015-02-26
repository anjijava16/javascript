var common = require('../common.js');

var commonExportNames = Object.keys(common);
for(var i = 0; i < commonExportNames.length; i++){
  var exportName = commonExportNames[i];
  exports[exportName] = common[exportName];
}

exports.integrationCommon1 = function(){
  console.log('integrationCommon_1');
};

exports.integrationCommon2 = function(){
  console.log('integrationCommon_2');
};
