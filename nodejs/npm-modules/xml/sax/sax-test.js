var sax = require("sax"),
  strict = true, // set to false for html-mode
  parser = sax.parser(strict);

var isFound = false;

parser.onopentag = function (tag) {
  console.log('onopentag');
  if(tag.name === "available"){
    isFound = true;
    console.log(tag);
  }
};
parser.ontext = function (text) {
  console.log('ontext ', text);
  if(!!isFound){
    if(text !== 'false'){
      console.log('#FAIL');
    }
    else{
      console.log('#PASS');
    }
    isFound = false;
  }
};
parser.onattribute = function (attr) {
  // an attribute.  attr has "name" and "value"
  console.log(attr);
};
parser.onend = function () {
  // parser stream is done, and ready to have more stuff written to it.
};

parser.write('<?xml version="1.0" encoding="UTF-8"?>\n<response>\n  <domain>Google.com</domain>\n  <available>false</available>\n</response>').close();
