App = Ember.Application.create();
App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3000'
});

require('./router');
require('./routes/*');
require('./models/*');
require('./controllers/*');
