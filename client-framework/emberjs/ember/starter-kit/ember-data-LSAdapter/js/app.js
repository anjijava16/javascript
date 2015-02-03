App = Ember.Application.create();
// migrate to ember data LSAdapter
// 1. add ember-data.js to js/libs
// 2, add following script to index.html
// <script src="js/libs/ember-data.js"></script>
// 3. add localstorage-adapter.js to js/libs
// 4, add following script to index.html
// <script src="js/libs/localstorage-adapter.js"></script>

Ember.Application.initializer({
  name: "DBseeds",
  initialize: function (container, application) {
    console.log('initialize');
    localStorage.clear();
    store = container.lookup('store:main');
    var post = store.createRecord('post', {
      id: 111,
      title: 'title-111',
      author: 'author-111',
      excerpt: 'excerpt-111',
      body: 'body-111'
    });
    post.save();
  }
});

App.ApplicationAdapter = DS.LSAdapter.extend();

App.Post = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  excerpt: DS.attr(),
  body: DS.attr()
});

App.Router.map(function () {
  this.resource('about');
  this.resource('posts', function () {
    this.resource('post', { path: ':post_id' });
  });
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
  actions: {
    // delete a record
    delete: function (p) {
      this.transitionToRoute('posts');
      this.store.find('post', p.id).then(function (post) {
        post.destroyRecord();
      });
    },
    // modify a record
    modify: function (p) {
      console.log('post=', p);
      this.store.find('post', p.id).then(function (post) {
        post.set('title', 'modify title');
        post.save();
      });
    },
    // add a new record
    add: function () {
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

// test data
// TODO: use foreach to add following data to ember data store
var posts = [
  {
    id: '1',
    title: "Rails is Omakase",
    author: { name: "d2h" },
    excerpt: "There are lots of à la carte software environments in this world. Places where in order to eat, you must first carefully look over the menu of options to order exactly what you want.",
    body: "I want this for my ORM, I want that for my template language, and let's finish it off with this routing library. Of course, you're going to have to know what you want, and you'll rarely have your horizon expanded if you always order the same thing, but there it is. It's a very popular way of consuming software.\n\nRails is not that. Rails is omakase."
  },
  {
    id: '2',
    title: "The Parley Letter",
    author: { name: "d2h" },
    excerpt: "My [appearance on the Ruby Rogues podcast](http://rubyrogues.com/056-rr-david-heinemeier-hansson/) recently came up for discussion again on the private Parley mailing list.",
    body: "A long list of topics were raised and I took a time to ramble at large about all of them at once. Apologies for not taking the time to be more succinct, but at least each topic has a header so you can skip stuff you don't care about.\n\n### Maintainability\n\nIt's simply not true to say that I don't care about maintainability. I still work on the oldest Rails app in the world."
  }
];
