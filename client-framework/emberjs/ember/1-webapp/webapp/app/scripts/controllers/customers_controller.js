App.CustomersController = Ember.ArrayController.extend({
  filter: '',

  filteredContent: function(){
    var filter = this.get('filter');
    var rx = new RegExp(filter, 'gi');
    var customers = this.get('arrangedContent');

    return customers.filter(function(customer) {
      return customer.get('name').match(rx) || customer.get('age').match(rx);
    });

  }.property('arrangedContent', 'filter'),
  actions: {
    sortBy: function(property){
      this.set('sortProperties', [property]);
      this.set('sortAscending', !this.get('sortAscending'));
    }
  }
});
