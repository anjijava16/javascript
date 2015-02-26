var text = '<?xml version="1.0" encoding="UTF-8"?>\n<response>\n  <domain>Google.com</domain>\n  <available>false</available>\n</response>';
var m = text.match('<available>(.+?)<\/available>');
console.log(m[1]);
