App.ApplicationAdapter = DS.RESTAdapter.extend();

// fix the path construction to avoid the cammelCase on the api calls
App.ApplicationAdapter.reopen({
    pathForType: function(type) {
        var decamelized = Ember.String.decamelize(type);
        return Ember.String.pluralize(decamelized);
    }
});

// specify that the ApiKey model will comunicate through the LSAdapter and not with the api
App.ApiKeyAdapter = DS.LSAdapter.extend({
    namespace: 'emberauth-keys'
});
