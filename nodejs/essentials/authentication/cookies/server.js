var express = require('express');
var app = express();
var credentials = require('./credentials.js');

app.use(require('cookie-parser')(credentials.cookieSecret));
app.use(require('body-parser')());

console.log(credentials.cookieSecret);

app.get('/', function(req, res){
  if (req.cookies.remember) {
    res.send('Remembered :). Click to <a href="/forget">forget</a>!.');
  } else {
    res.send('<form method="post"><p>Check to <label>'
    + '<input type="checkbox" name="remember"/> remember me</label> '
    + '<input type="submit" value="Submit"/>.</p></form>');
  }
});

app.get('/forget', function(req, res){
  res.clearCookie('remember');
  res.redirect('back');
});

app.post('/', function(req, res){
  var minute = 60 * 1000;
  if(req.body.remember) res.cookie('remember', 1, {maxAge: minute});
  res.redirect('back');
});

app.listen(3000, function(){
  console.log('app started at port 3000');
});
