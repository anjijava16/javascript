var WebPageTest = require('webpagetest');
var wpt = new WebPageTest('http://wpt.intranet.gdg');

wpt.runTest('https://www.dev-godaddy.com/hosting/website-builder/how-to-build-a-website', function(err, data) {
    console.log(err || data);
});
