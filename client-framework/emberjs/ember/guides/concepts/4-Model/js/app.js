App = Ember.Application.create();

//App.ApplicationAdapter = DS.FixtureAdapter.extend();
App.PostAdapter = DS.FixtureAdapter.extend();
App.CommentAdapter = DS.FixtureAdapter.extend();

App.Post = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  comments: DS.hasMany('comment', {async: true})
});

App.Comment = DS.Model.extend({
  text: DS.attr(),
  post: DS.belongsTo('post')
});

// add posts to data store
App.Post.FIXTURES = [
  {
    id: '1',
    title: "Rails is Omakase",
    author: { name: "Tom" },
    comments: [2]
  },
  {
    id: '2',
    title: "The Parley Letter",
    author: { name: "Harry" },
    comments: [1, 3]
  }
];

App.Comment.FIXTURES = [
  {
    id: 1,
    text: 'comment 1',
    post: 2
  },
  {
    id: 2,
    text: 'comment 2',
    post: 1
  },
  {
    id: 3,
    text: 'comment 3',
    post: 2
  }
]

App.Router.map(function () {
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


