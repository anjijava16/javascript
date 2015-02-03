var merge = require('deepmerge');
var defaultBody = require('./data/defaultBody.json');

var tld = 'ch';

var tldSpecificData;

try {
  tldSpecificData = require('./data/' + tld + '.json');
}
catch (e){
  console.log(e);
  console.log(e.message);
  // throw if error message does not contain 'Cannot find module'
  if(e.message.indexOf('Cannot find module') < 0){
    console.log('#Other error');
    throw e;
  }
  else{
    console.log('#Cannot find module');
  }
  console.log('debug');
}

console.log(tldSpecificData);

if(tldSpecificData) {
  console.log('#tldSpecificData[process.env.NODE_ENV]', tldSpecificData[process.env.NODE_ENV]);

  var tldMergedData;
  if('undefined' !== typeof(tldSpecificData.common) && 'undefined' !== typeof(tldSpecificData[process.env.NODE_ENV])){
    tldMergedData = merge(tldSpecificData.common, tldSpecificData[process.env.NODE_ENV]);
  }
  else if(tldSpecificData.common){
    tldMergedData = tldSpecificData.common;
  }
  else if(tldSpecificData[process.env.NODE_ENV]){
    tldMergedData = tldSpecificData[process.env.NODE_ENV];
  }
  console.log('#merged changing data:');
  console.log(tldMergedData);

  var mergedBody = merge(defaultBody, tldMergedData);

  console.log('#merged result:');
  console.log(mergedBody);

  console.log('====');
  console.log(defaultBody.renewAuto);
  console.log('tld:', mergedBody.tld);
  console.log('renewAuto:', mergedBody.renewAuto);
  console.log('nameServers:', mergedBody.nameServers);
  console.log('contactBilling.addressMailing.country:', mergedBody.contactBilling.addressMailing.country);
}
else
{
  console.log('use default');
}