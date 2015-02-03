Todos.TodosController = Ember.ArrayController.extend({
  foo: 'FOO!',
  actions: {
    createTodo: function(){
      // get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if(!title.trim()){return;}

      // create the new Todo model
      var todo = this.store.createRecord('todo', {title: title, isCompleted: false});

      // clear the "New Todo" text field
      this.set('newTitle');

      // save the new model
      todo.save();
    },
    clearCompleted: function(){
      console.log('clearCompleted');
      var completed = this.filterBy('isCompleted', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    }
  },

  hasCompleted: function(){
    return this.get('completed') > 0;
  }.property('completed'),

  completed: function(){
    return this.filterBy('isCompleted', true).get('length');
  }.property('@each.isCompleted'),

  remaining: function(){
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function(){
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining'),

  allAreDone: function(key, value) {
    console.log('key=', key);
    console.log('value=', value);
    if(value === undefined) {
      return !!this.get('length') && this.isEvery('isCompleted');
    }else{
      this.setEach('isCompleted', value);
      this.invoke('save');
      return value;
    }
  }.property('@each.isCompleted')
});

