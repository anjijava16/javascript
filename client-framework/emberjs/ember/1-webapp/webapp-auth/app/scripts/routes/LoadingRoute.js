App.LoadingRoute = Ember.Route.extend({
    beforeModel: function() {
        Ember.$('.navbar-header').hide();
    },
    afterModel: function() {
        Ember.$('.navbar-header').show();
    }
});
