Chapter 8 - Form Handling
================================

## Installation

> `npm install`

## Running / Development

> Launch server `node server.js`

### Form Handling

server.js

```
app.get('/thank-you', function(req, res){
    res.render('thank-you');
});
app.get('/newsletter', function(req, res){
    // we will learn about CSRF later...for now, we just
    // provide a dummy value
    res.render('newsletter', { csrf: 'CSRF token goes here' });
});
app.post('/process', function(req, res){
    // display form submitted data
    console.log('Form (from querystring): ' + req.query.form); 
    console.log('CSRF token (from hidden form field): ' + req.body._csrf); 
    console.log('Name (from visible form field): ' + req.body.name); 
    console.log('Email (from visible form field): ' + req.body.email);

    res.redirect(303, '/thank-you');
});
```

newsletter.handlebars

```
<div class="formContainer">
  <form class="form-horizontal newsletterForm" role="form"
        action="/process?form=newsletter" method="POST">
    <input type="hidden" name="_csrf" value="{{csrf}}">
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

thanks-you.handlebars

```
<h2>THANK YOU!</h2>
<p>We appreciate your business.  Please <a href="/contact">contact us</a>
  if you have any questions or concerns.</p>
```

**Run Tests**

> views/newsletter.handlebars - visit `http://localhost:3000/newsletter`

### AJAX Forms

AJAX is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page.

server.js

if(req.xhr || req.accepts('json,html')==='json'){ /* it is true */}

```
app.post('/process', function(req, res){
    if(req.xhr || req.accepts('json,html')==='json'){
        console.log('$.ajax called');
        // if there were an error, we would send { error: 'error description' }
        res.send({ success: true });
    } else {
        // if there were an error, we would redirect to an error page
        res.redirect(303, '/thank-you');
    }
});
```

newsletter.handlebars

```
<div class="formContainer">
  <form class="form-horizontal newsletterForm" role="form"
        action="/process?form=newsletter" method="POST">
    <input type="hidden" name="_csrf" value="{{csrf}}">
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
{{#section 'jquery'}}
  <script>
    $(document).ready(function(){
      $('.newsletterForm').on('submit', function(evt){
        evt.preventDefault();
        var action = $(this).attr('action');
        var $container = $(this).closest('.formContainer');
        $.ajax({
          url: action,
          type: 'POST',
          data: $(this).serialize(),
          success: function(data){
            if(data.success){
              $container.html('<h2>thank you</h2>');
            } else {
              $container.html('There was a problem.');
            }
          },
          error: function(){
            $container.html('There was a problem.');
          }
        });
      });
    });
  </script>
{{/section}}
```

**Run Tests**

> views/nursery-rhyme.handlbars - visit `http://localhost:3000/nursery-rhyme`

### File Uploads

npm install formidable

server.js

```
var formidable = require('formidable');
app.get('/contest/vacation-photo', function(req, res){
    var now = new Date();
    res.render('contest/vacation-photo', { year: now.getFullYear(), month: now.getMonth() });
});
app.post('/contest/vacation-photo/:year/:month', function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
        if(err) return res.redirect(303, '/error');
        console.log('received fields:');
        console.log(fields);
        console.log('received files:');
        console.log(files);
        res.redirect(303, '/thank-you');
    });
});
```

vacation-photo.handlebars

```
<form class="form-horizontal" role="form"
      enctype="multipart/form-data" method="POST"
      action="/contest/vacation-photo/{year}/{month}">
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
    <label for="fieldPhoto" class="col-sm-2 control-label">Vacation photo</label>
    <div class="col-sm-4">
      <input type="file" class="form-control" required accept="image/*"
             id="fieldPhoto" data-url="/upload" name="photo">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-4">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</form>
```

**Run Tests - upload file**

> views/vacation-photo.handlbars - visit `http://localhost:3000/contest/vacation-photo` enter name, email, choose a photo and click Submit.
