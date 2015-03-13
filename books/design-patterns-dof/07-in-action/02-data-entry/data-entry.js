var Patterns = {
  // ** namespace pattern
  namespace: function(name){
    // ** single var pattern
    var parts = name.split(".");
    var ns = this;

    // ** iterator pattern
    for(var i = 0, len = parts.length; i < len; i++){
      // ** || idiom
      ns[parts[i]] = ns[parts[i]] || {};
      ns = ns[parts[i]];
    }
    return ns;
  }
};

// ** namespace pattern
// ** revealing module pattern
// ** singleton pattern
Patterns.namespace("InAction").DataEntry = (function() {
  // ** single var pattern
  // ** namespace pattern (Models, View, Routers)
  var Models = {};
  var Views = {};
  var Routers = {};

  var router;

  var start = function () {
    router = new Routers.Router();
    Backbone.history.start();
  }

  // Change template token markers to {{ and }}
  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g,
    evaluate: /\{\{(.+?)\}\}/g
  };

  // ** extend pattern
  // ** option hash idiom
  Routers.Router = Backbone.Router.extend({
    // ** init pattern
    initialize: function (options) {
      this.el1 = $("#customers-content");
      this.el2 = $("#form-content");
    },
    routes: {
      "": "main"
    },
    main: function () {
      this.el1.html(new Views.Customers().el);
    }
  });

  // ** extend pattern
  // ** option hash idiom
  Models.Customer = Backbone.Model.extend({
    defaults: {
      first: "",
      last: ""
    }
  });

  // ** extend pattern
  // ** option hash idiom
  Models.Customers = Backbone.Collection.extend({
    model: Models.Customer,
    url: "customers"
  });

  // ** extend pattern
  // ** option hash idiom
  Views.Customers = Backbone.View.extend({
    template: _.template($('#customers-template').html()),
    events: {
      'click .add': 'add'
    },
    // ** init pattern
    initialize: function () {
      this.collection = new Models.Customers();
      // ** observer pattern
      this.collection.on('reset add update remove change', this.render, this);
      this.collection.fetch();
    },
    render: function (eventName) {
      // total customer count
      this.$el.html(this.template({count: this.collection.length}));

      // ** iterator pattern
      this.collection.each(function (customer) {
        // ** option has idiom
        var view = new Views.Customer({
          collection: this.collection, model: customer
        });
        this.$el.append(view.render().el);
      }, this);

      return this;
    },
    add: function () {
      // ** option hash idiom
      var view = new Views.Customer.Form({
        collection: this.collection,
        model: new Models.Customer()
      });
      $("#form-content").html(view.render().el);
      $("#first").focus();
    }
  });

  // ** extend pattern
  // ** option hash idiom
  Views.Customer = Backbone.View.extend({
    className: 'well',
    // ** chaining pattern
    template: _.template($('#customer-template').html()),
    events: {
      'click .edit': 'edit',
      'click .delete': 'remove'
    },
    // ** init pattern
    initialize: function () {
      this.model.bind("destroy", this.close, this);
    },
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    edit: function () {
      // ** option hash idiom
      var view = new Views.Customer.Form({collection: this.collection, model: this.model});
      $("#form-content").html(view.render().el);
      // ** chaining pattern
      $('#first').focus().val('').val(this.model.get("first"));  // focus, but deselect the current value
    },
    remove: function () {
      this.model.destroy();
    },
    close: function () {
      $(this.el).unbind();
      $(this.el).remove();
    }
  });

  // ** extend pattern
  // ** option hash idiom
  Views.Customer.Form = Backbone.View.extend({
    tagName: 'form',
    className: 'form-horizontal',
    // ** chaining pattern
    template: _.template($('#form-template').html()),
    events: {
      'submit': 'submit',
      'reset': 'cancel'
    },
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    submit: function (event) {
      event.preventDefault();

      if (this.model.isNew()) {     // add
        this.collection.create({
          first: this.$('#first').val(),
          last: this.$('#last').val()
        });

      } else {       // update
        var mod = this.collection.get(this.model.get("id"));

        this.model.set("first", this.$('#first').val());
        this.model.set("last", this.$('#last').val());
        var url = this.model.url;

        this.model.url = "customers";
        this.model.save();
        this.model.url = url;
      }
      this.$el.empty();
    },
    cancel: function (event) {
      event.preventDefault();
      this.$el.empty();
    }
  });

  // Helper: generate four random hex digits
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };

  // Helper: generate a pseudo-GUID by concatenating random hex
  var guid = function () {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  };

  // Used to mock database persistence
  if (!window.databaseCustomers) {
    window.databaseCustomers = [{id: "5f294421-08af-135f-1d22-583245fb67b5", first: "Joan", last: "Kennedy"},
      {id: "461f92de-a7fc-a90d-4419-958423678d8f", first: "Kevin", last: "McGregor"}];
  }

  // server mock
  // ** options hash idiom
  fauxServer.addRoutes({
    listCustomers: {
      urlExp: "customers",
      httpMethod: "GET",
      handler: function (context) {
        context.data = databaseCustomers;
        return context.data;
      }
    },
    addCustomer: {
      urlExp: "customers",
      httpMethod: "POST",
      handler: function (context) {
        context.data.id = guid();
        databaseCustomers.push(context.data);
        return context.data;
      }
    },
    updateCustomer: {
      urlExp: "customers",
      httpMethod: "PUT",
      handler: function (context) {
        databaseCustomers.push(context.data);
        return context.data;
      }
    },
    deleteCustomer: {
      urlExp: "customers/:id",
      httpMethod: "DELETE",
      handler: function (context, bookId) {
        var len = databaseCustomers.length;
        for (var i = 0; i < len; i++) {
          if (databaseCustomers[i].id === bookId) {
            databaseCustomers.splice(i, 1);
          }
        }
      }
    }
  });
  return {start: start};
})();

$(function(){
  // ** facade pattern
  Patterns.InAction.DataEntry.start();
});
