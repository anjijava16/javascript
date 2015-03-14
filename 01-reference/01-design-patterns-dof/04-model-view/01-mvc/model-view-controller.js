var Model = function(names){
  this.names = names;
  console.log('#Model', this.names); // ['Bob Smith', 'Cindy Jackson', 'Alan Wong']
  this.nameAddedObserver = new Observer();
  this.nameRemovedObserver = new Observer();
};
Model.prototype = {
  add: function(name){
    this.names.push(name);
    this.nameAddedObserver.notify(this.names);
  },
  remove: function(index){
    this.names.splice(index, 1);
    this.nameRemovedObserver.notify(this.names);
  },
  getNames: function(){ return this.names; }
};

var Observer = function(){ this.observers = []; };
Observer.prototype = {
  attach: function(callback){
    this.observers.push(callback);
  },
  notify: function(n){
    console.log('#Observer', n);
    for(var i = 0, len = this.observers.length; i < len; i++){
      console.log('#Observer', this.observers[i]);
      this.observers[i](n);  // invoke function(n){ self.refresh(n); }
    }
  }
};

var Controller = function(model){
  this.model = model;
  console.log('#Controller:', this.model);  // { names: ['Bob Smith', 'Cindy Jackson', 'Alan Wong'] }
};
Controller.prototype = {
  addName: function(name){ this.model.add(name); },
  removeName: function(index){ this.model.remove(index); }
};

var View = function(elements){
  this.elements = elements;
};
View.prototype = {
  init: function(model, controller){
    console.log('#View:', model);  // { names: ['Bob Smith', 'Cindy Jackson', 'Alan Wong'] }
    var self = this;
    model.nameAddedObserver.attach(
      function(n){ self.refresh(n); }
    );
    console.log('#View nameAddedObserver', model.nameAddedObserver.observers);
    model.nameRemovedObserver.attach(
      function(n){ self.refresh(n); }
    );
    console.log('#View nameRemovedObserver', model.nameRemovedObserver.observers);

    this.elements.addButton.click(function(){
      var name = prompt('Add a new user name: ', '');
      if(name) {
        controller.addName(name);
      }
    });
    this.elements.removeButton.click(function(){
      console.log('#View', self.elements.nameList.get(0).selectedIndex);
      var index = self.elements.nameList.get(0).selectedIndex;
      if(index != -1){ controller.removeName(index); }
      else{ alert("No user was selected"); }
    });
    this.refresh(model.getNames());
  },
  refresh: function(names){
    this.elements.nameList.html('');
    for(var i = 0, len = names.length; i < len; i++){
      this.elements.nameList.append('<option>' + names[i] + '</option>');
    }
    this.elements.nameCount.text("Total users: " + len);
  }
};
