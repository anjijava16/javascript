App.Router.map(function() {
  // nested route
  this.resource('customers', {path: 'customers'}, function(){
    this.route('new', {path: '/new'});
    // edit one record: this.route('edit' ...) below, route model binding does not work
    this.route('edit', {path: '/edit/:id'});

    // edit one record: use this.resource('customer', ...) because it works
    this.resource('customer', {path: ':customer_id'});
  });
  this.route('about');
});
