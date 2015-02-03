App.CustomersRoute = Ember.Route.extend({
  model: function () {
    return this.store.findAll('customer');
  }
});
