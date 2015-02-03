App = Ember.Application.create();

var hostName = 'http://localhost:3000';

// Routes
App.Router.map(function () {
    this.route('articles');
    this.route('customers');
    this.route('login');
});

App.ApplicationController = Ember.Controller.extend({
   actions: {
       about: function(){
           // navigate to express about page
           window.location.href = hostName + "/about";
       }
   }
});

App.AuthenticatedRoute = Ember.Route.extend({
    getJSONWithToken: function(url) {
        var token = this.controllerFor('login').get('token');
        return $.getJSON(url, { token: token });
    },

    actions: {
        error: function(reason, transition) {
            console.log('#error');
            if (reason.status === 401) {
                this.transitionTo('login');
            } else {
                alert('Something went wrong');
            }
        }
    }
});

App.ArticlesRoute = App.AuthenticatedRoute.extend({
    model: function () {
        return this.getJSONWithToken(hostName + '/articles.json');
    }
});

App.CustomersRoute = App.AuthenticatedRoute.extend({
    model: function () {
        return this.getJSONWithToken(hostName + '/customers.json');
    }
});

// Controllers
App.LoginController = Ember.Controller.extend({
    actions: {
        login: function () {
            var self = this, data = this.getProperties('username', 'password');
            // Clear out any error messages.
            this.set('errorMessage', null);
            $.post(hostName + '/auth.json', data).then(function (response) {
                self.set('errorMessage', response.message);
                if (response.success) {
                    alert('Login succeeded!');
                    self.set('token', response.token);
                    // Redirect to 'articles' by default.
                    self.transitionToRoute('articles');
                }
            });
        }
    }
});
