App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Post = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr()
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

App.Router.map(function () {
  this.route('customer');

  this.resource('posts', function () {
    this.resource('post', { path: ':post_id' });
  });
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

App.PostController = Ember.ObjectController.extend({
  actions:{
    handleSubmit: function(){
      alert('title: ' + this.get('title') + ', author: ' + this.get('author.name'));
    }
  }
});

App.CustomerRoute = Ember.Route.extend({
  model: function (){
    return ['order_1', 'order_2', 'order_3'];
  }
});

App.CustomerController = Ember.Controller.extend({
  actions: {
    addOrder: function(){
      this.get('model').pushObject('new order');
    },
    setNote: function () {
      this.set('note', 'empty');
    },
    getNote: function () {
      alert(this.get('note'));
    },
    popup: function(){
      alert('popup from the customer controller');
    }
  },
  note: 'it is note',
  customer: {
    name: 'Tom',
    age: 10
  },
  customerInfo: function(){
    return this.get('customer.name') + ' has note - ' + this.get('note');
  }.property('customer.name', 'note'),
  customerName: '',
  updateCustomerName: function(){
    this.set('customerName', this.get('customer.name'));
  }.observes('customer.name')
});

App.IndexRoute = Ember.Route.extend({
  model: function () {
    return ['red', 'yellow', 'blue'];
  }
});

App.IndexController = Ember.ArrayController.extend({
  needs: ['customer'],
  actions: {
    callCustomerController: function(){
    this.get('controllers.customer').send('popup');
    }
  }
});


