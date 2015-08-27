var url = "http://www.google.com";
var regex = /www/g;
var target = url.match(regex);
console.log(target);
var url = url.replace(regex, "mx");
console.log(url);
