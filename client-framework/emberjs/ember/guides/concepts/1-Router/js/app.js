App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Post = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr()
});

App.Customer = DS.Model.extend({
  name: DS.attr(),
  age: DS.attr()
});

// add posts to data store
App.Post.FIXTURES = [
  {
    id: '1',
    title: "title 1",
    author: { name: "Tom" }
  },
  {
    id: '2',
    title: "title 2",
    author: { name: "Harry" }
  }
];

App.Customer.FIXTURES = [
  {
    id: 1,
    name: 'Tom',
    age: 10
  },
  {
    id: 2,
    name: 'Dick',
    age: 20
  },
  {
    id: 3,
    name: 'Harry',
    age: 30
  }
];

App.Router.map(function() {
  // explicit path for a route
  this.route('first-about', {path: 'first-aboutme'});
  // implicit path for a route
  this.route('about');

  this.resource('posts', function () {
    this.resource('post', { path: ':post_id' });
  });

  // nested route
  this.resource('customers', {path: 'customers'}, function(){
    this.route('new', {path: '/new'});
    this.route('edit', {path: '/edit/:id'});
  });
});

App.CustomersRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('customer');
  }
});

App.CustomersEditRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('customer', params.id);
  }
});

App.CustomersNewController = Ember.Controller.extend({
  actions: {
    // add a new record
    add: function () {
      var customer = this.store.createRecord('customer', {
        name: this.get('name'),
        age: this.get('age')
      });
      customer.save();
      this.transitionToRoute('customers');
    }
  }
});

App.PostsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('post');
  }
});

App.PostRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('post', params.post_id);
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});


