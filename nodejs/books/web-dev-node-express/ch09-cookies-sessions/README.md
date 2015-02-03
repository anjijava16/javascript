Chapter 9 - Cookies and Sessions
================================

## Installation

> `npm install`

## Running / Development

> Launch server `node server.js`

### Cookies

npm install --save-dev cookie-parser

server.js

```
var credentials = require('./credentials.js');
app.use(require('cookie-parser')(credentials.cookieSecret));

app.get('/', function(req, res) {

    if(req.cookies.monster === undefined){
        // set cookies
        console.log('set cookies');
        res.cookie('monster', 'nom nom');
        res.cookie('signed_monster', 'signed nom nom', {signed: true});
    }
    else{
        // read cookies
        console.log('read cookies');
        var monster = req.cookies.monster;
        console.log(monster);
        var signedMonster = req.signedCookies.signed_monster;
        console.log(signedMonster);
    }
    res.render('home');
});
```

credentials.js

```
module.exports = {
    cookieSecret: 'your cookie secret goes here'
};
```

**Run Tests**

> visit `http://localhost:3000` to set cookies, refresh it to read cookies

### Sessions

Checkout essentials -> forms-cookies-sessions -> sessions

#### Flash Messages

main.handlebars

```
    {{#if flash}}
      <div class="alert alert-dismissible alert-{{flash.type}}">
        <button type="button" class="close"
                data-dismiss="alert" aria-hidden="true">&times;</button>
        <strong>{{flash.intro}}</strong> {{{flash.message}}}
      </div>
    {{/if}}
```

newsletter.handlebars

```
<div class="formContainer">
  <form class="form-horizontal newsletterForm" role="form"
        action="/newsletter" method="POST">
    <div class="form-group">
      <label for="fieldName" class="col-sm-2 control-label">Name</label>
      <div class="col-sm-4">
        <input type="text" class="form-control"
               id="fieldName" name="name">
      </div>
    </div>
    <div class="form-group">
      <label for="fieldEmail" class="col-sm-2 control-label">Email</label>
      <div class="col-sm-4">
        <input type="email" class="form-control" required
               id="fieldName" name="email">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-4">
        <button type="submit" class="btn btn-default">Register</button>
      </div>
    </div>
  </form>
</div>
```

newsletter/archive.handlebars

```
<h2>Past Newsletters</h2>
```

server.js

```
// flash message middleware
app.use(function(req, res, next){
    // if there's a flash message, transfer
    // it to the context, then clear it
    res.locals.flash = req.session.flash;
    delete req.session.flash;
    next();
});

app.get('/newsletter', function(req, res){
    res.render('newsletter');
});

// for now, we're mocking NewsletterSignup:
function NewsletterSignup(){
};
NewsletterSignup.prototype.save = function(cb){
    cb();
};

var VALID_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// session.flash
app.post('/newsletter', function(req, res){
    var name = req.body.name || '', email = req.body.email || '';
    // input validation
    if(!email.match(VALID_EMAIL_REGEX)) {
        console.log('Invalid name email');
        if(req.xhr){
            console.log('req.xhr: invalid name emaill');
            return res.json({ error: 'Invalid name email address.' });
        }
        req.session.flash = {
            type: 'danger',
            intro: 'Validation error!',
            message: 'The email address you entered was  not valid.',
        };
        return res.redirect(303, '/newsletter/archive');
    }
    new NewsletterSignup({ name: name, email: email }).save(function(err){
        if(err) {
            console.log('error: NewsletterSignup.save');
            if(req.xhr) return res.json({ error: 'Database error.' });
            req.session.flash = {
                type: 'danger',
                intro: 'Database error!',
                message: 'There was a database error; please try again later.',
            };
            return res.redirect(303, '/newsletter/archive');
        }

        if(req.xhr){
            console.log('req.xhr: NewsletterSignup.save');
            return res.json({ success: true });
        }

        console.log('success: NewsletterSignup.save');
        req.session.flash = {
            type: 'success',
            intro: 'Thank you!',
            message: 'You have now been signed up for the newsletter.',
        };
        return res.redirect(303, '/newsletter/archive');
    });
});
app.get('/newsletter/archive', function(req, res){
    res.render('newsletter/archive');
});
```

**Run Tests**

> visit `http://localhost:3000/newsletter`, enter name, email and click Register. Result: a "Thank you!" flash message is shown.

