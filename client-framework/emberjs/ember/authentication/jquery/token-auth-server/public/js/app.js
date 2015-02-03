App = Ember.Application.create();

// Routes
App.Router.map(function () {
    this.route('articles');
    this.route('login');
});

App.ApplicationController = Ember.Controller.extend({
   actions: {
       about: function(){
           // navigate to express about page
           window.location.href = "/about";
       }
   }
});

App.ArticlesRoute = Ember.Route.extend({
    model: function () {
        var token = this.controllerFor('login').get('token');
        return $.getJSON('/articles.json', {token: token});
    },
    actions: {
        error: function (reason, transition) {
            if (reason.status === 401) {
                alert('You must log in!');
                this.transitionTo('login');
            } else {
                alert('Something went wrong');
            }
        }
    }
});

// Controllers
App.LoginController = Ember.Controller.extend({
    actions: {
        login: function () {
            var self = this, data = this.getProperties('username', 'password');
            // Clear out any error messages.
            this.set('errorMessage', null);
            $.post('/auth.json', data).then(function (response) {
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
