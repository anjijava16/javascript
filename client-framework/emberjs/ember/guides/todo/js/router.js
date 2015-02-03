Todos.Router.map(function(){
  this.resource('todos', { path: '/' }, function(){
    this.route('active');
    this.route('completed');
  });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function(){
    // line below means the model for this route is the same mdoel as the TodosRoute.
    return this.modelFor('todos');
  }
});

Todos.TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo){
      return !todo.get('isCompleted');
    })
  },
  renderTemplate: function(controller){
    this.render('todos/index', {controller: controller});
  }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function(todo){
      return todo.get('isCompleted');
    })
  },
  renderTemplate: function(controller){
    this.render('todos/index', {controller: controller});
  }
});