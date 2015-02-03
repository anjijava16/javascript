App = Ember.Application.create();

App.Router.map(function () {
  this.route('customer');
  this.route('customers');
  this.route('all-customers');
  this.route('colors');
});

App.ColorsRoute = Ember.Route.extend({
  model: function(){
    return ['green', 'yellow', 'orange'];
  },
  setupController: function(controller, model){
    controller.set('model', model);
    controller.set('owner', 'Tom');
  }
});

App.CustomerRoute = Ember.Route.extend({
  model: function () {
    return {
      firstName: 'Tom',
      age: 10
    };
  },
  actions: {
    onClicked: function () {
      alert('user clicked');
    }
  }
});

App.CustomersRoute = Ember.Route.extend({
  model: function () {
    return ['Tom', 'Dick', 'Harry'];
  }
});

App.AllCustomersRoute = Ember.Route.extend({
  renderTemplate: function(){
    this.render('customers');
  }
});

App.IndexRoute = Ember.Route.extend({
  redirect: function(){
    this.transitionTo('customers');
  },
  model: function () {
    return ['red', 'yellow', 'blue'];
  }
});


