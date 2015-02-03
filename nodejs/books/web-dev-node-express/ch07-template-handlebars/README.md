Chapter 7 - Templating with Handlebars
================================

## Installation

> `npm install`

## Running / Development

> Launch server `node server.js`

### Sections - dynamically insert scripts to views

server.js

```
// set up handlebars view engine
var handlebars = require('express-handlebars').create({
    defaultLayout:'main',
    helpers: {
        section: function(name, options){
            if(!this._sections)this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});
```

main.handlebars

```
<!doctype html>
<html>
<head>
  <title>Meadowlark Travel</title>
  {{{_sections.head}}}
</head>
<body>
{{{body}}}
<script src="http://code.jquery.com/jquery-2.0.2.min.js"></script>
{{{_sections.jquery}}}
</body>
</html>
```

jquery-test.handlebars

```
{{#section 'head'}}
    <!-- we want Google to ignore this page -->
    <meta name="robots" content="noindex">
{{/section}}

<h1>Test Page</h1>
<p>We're testing some jQuery stuff.</p>

{{#section 'jquery'}}
    <script>
      $('document').ready(function(){
        $('h1').html('jQuery Works');
      });
    </script>
{{/section}}
```

**Run Tests**

> views/jquery-test.handlebars - visit `http://localhost:3000/jquery-test`

**References**

> http://handlebarsjs.com/

> http://handlebarsjs.com/block_helpers.html

### Client-Side Handlebars

server.js

```
app.get('/nursery-rhyme', function(req, res){
    res.render('nursery-rhyme');
});
app.get('/data/nursery-rhyme', function(req, res){
    res.json({
        animal: 'squirrel',
        bodyPart: 'tail',
        adjective: 'bushy',
        noun: 'heck',
    });
});
```

nursery-rhyme.handlebars

```
{{#section 'head'}}
  <script src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.3.0/handlebars.min.js"></script>

  <script id="nurseryRhymeTemplate" type="text/x-handlebars-template">
    Marry had a little <b>\{{animal}}</b>, its <b>\{{bodyPart}}</b>
    was <b>\{{adjective}}</b> as <b>\{{noun}}</b>.
  </script>
{{/section}}

<div id="nurseryRhyme">Click a button....</div>
<hr>
<button id="btnNurseryRhyme">Generate nursery rhyme</button>
<button id="btnNurseryRhymeAjax">Generate nursery rhyme from AJAX</button>

{{#section 'jquery'}}
  <script>
    $(document).ready(function(){
      var nurseryRhymeTemplate = Handlebars.compile(
        $('#nurseryRhymeTemplate').html());
      var $nurseryRhyme = $('#nurseryRhyme');
      $('#btnNurseryRhyme').on('click', function(evt){
        evt.preventDefault();
        $nurseryRhyme.html(nurseryRhymeTemplate({
          animal: 'basilisk',
          bodyPart: 'tail',
          adjective: 'sharp',
          noun: 'a needle'
        }));
      });
      $('#btnNurseryRhymeAjax').on('click', function(evt){
        evt.preventDefault();
        $.ajax('/data/nursery-rhyme', {
          success: function(data){
            $nurseryRhyme.html(nurseryRhymeTemplate(data))
          }
        });
      });
    });
  </script>
{{/section}}
```

**Run Tests**

> views/nursery-rhyme.handlbars - visit `http://localhost:3000/nursery-rhyme`

### Partials - weather

server.js

```
// mocked weather data
function getWeatherData(){
    return {
        locations: [
            {
                name: 'Portland',
                forecastUrl: 'http://www.wunderground.com/US/OR/Portland.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/cloudy.gif',
                weather: 'Overcast',
                temp: '54.1 F (12.3 C)',
            },
            {
                name: 'Bend',
                forecastUrl: 'http://www.wunderground.com/US/OR/Bend.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/partlycloudy.gif',
                weather: 'Partly Cloudy',
                temp: '55.0 F (12.8 C)',
            },
            {
                name: 'Manzanita',
                forecastUrl: 'http://www.wunderground.com/US/OR/Manzanita.html',
                iconUrl: 'http://icons-ak.wxug.com/i/c/k/rain.gif',
                weather: 'Light Rain',
                temp: '55.0 F (12.8 C)',
            }
        ]
    };
}

// middleware to add weather data to context
app.use(function(req, res, next){
    if(!res.locals.partials) res.locals.partials = {};
    res.locals.partials.weather = getWeatherData();
    next();
});
```

weather.handlebars

```
<div class="weatherWidget">
    {{#each partials.weather.locations}}
      <div class="location">
        <h3>{{name}}</h3>
        <a href="{{forecastUrl}}">
          <img src="{{iconUrl}}" alt="{{weather}}"> {{weather}}, {{temp}}
        </a>
      </div>
    {{/each}}
  <small>Source: <a href="http://www.wunderground.com">Weather Underground</a></small>
</div>
```

home.handlebars

```
<h1>Welcome to Meadowlark Travel</h1>
{{> weather}}
```

**Run Tests**

> views/home.handlebars - visit `http://localhost:3000`
