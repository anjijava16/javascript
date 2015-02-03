App.Customer = DS.Model.extend({
  name: DS.attr(),
  age: DS.attr()
});

// covert the rest JSON format to ember data expected format
App.CustomerSerializer = DS.RESTSerializer.extend({
  extractArray: function (store, type, payload) {
    payload = { customers: payload };
    return this._super(store, type, payload);
  }
});

// add customers to data store
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
