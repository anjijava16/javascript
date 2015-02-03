App = Ember.Application.create();

App.Router.map(function() {
  this.route('books');
});

App.BooksRoute = Ember.Route.extend({
  model: function(){
    return ['javascript', 'node.js', 'ember'];
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

Ember.Handlebars.helper('myToUpper', function(value, option){
  return value.toUpperCase();
});

