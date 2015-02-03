// note:
// Bugs
// 1, we need to refresh the post list after add or delete a post

App = Ember.Application.create();
// migrate to ember data RESTAdapter
// 1. add ember-data.js to js/libs
// 2, add following script to index.html
// <script src="js/libs/ember-data.js"></script>

App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3000'
});

App.Router.map(function () {
  this.resource('about');
  this.resource('posts', function () {
    this.resource('post', { path: ':post_id' });
  });
});

App.Post = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  excerpt: DS.attr(),
  body: DS.attr()
});

// covert the rest JSON format to ember data expected format
App.PostSerializer = DS.RESTSerializer.extend({
  extractArray: function (store, type, payload) {
    payload = { posts: payload };
    return this._super(store, type, payload);
  }
});

App.PostsRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('post');
  }
});

App.PostRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('post', params.post_id);
  }
});

App.PostController = Ember.ObjectController.extend({
  isEditing: false,
  isAdding: false,
  actions: {
    save: function(p){
      console.log('save()');
      this.store.find('post', p.id).then(function (post) {
        post.set('title', p.title);
        post.save();
      });
    },
    // delete a record
    delete: function (p) {
      this.transitionToRoute('posts');
      this.store.find('post', p.id).then(function (post) {
        post.destroyRecord();
      });
    },
    // modify a record
    modify: function (p) {
      console.log(p);
      this.store.find('post', p.id).then(function (post) {
        post.save();
      });
    },
    // add a new record
    addNew: function () {
      var post = this.store.createRecord('post', {
        id: 11,
        title: 'title-11',
        author: 'author-11',
        excerpt: 'excerpt-11',
        body: 'body-11'
      });
      post.save();
      this.transitionToRoute('post', 11);
    },
    edit: function () {
      this.set('isEditing', true);
    },
    doneEditing: function () {
      this.set('isEditing', false);
    },
    add: function () {
      this.set('isAdding', true);
    },
    doneAdding: function () {
      this.set('isAdding', false);
    }
  }
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function (input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('format-date', function (date) {
  return moment(date).fromNow();
});
