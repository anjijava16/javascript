var express = require('express');
app = express();

// use the ember code, html, css, javascript
app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
    console.log('app started at port 3000');
});
