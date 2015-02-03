App.CustomersNewController = Ember.Controller.extend({
    actions: {
        // add a new record
        add: function () {
            console.log('adding');
            var customer = this.store.createRecord('customer', {
                name: this.get('name'),
                age: this.get('age')
            });
            customer.save();
            this.transitionToRoute('customers');
        }
    }
});
