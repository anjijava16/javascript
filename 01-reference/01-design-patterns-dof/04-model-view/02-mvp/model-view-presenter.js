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

var View = function(elements){
  this.elements = elements;
};

var Presenter = function(model, view){
  this.model = model;
  this.view = view;
  this.index = -1;
};

Presenter.prototype = {
  init: function(){
    var self = this;
    this.view.elements.addButton.click(function(){
      self.addName();
    });
    this.view.elements.removeButton.click(function(){
      self.removeName();
    });
    this.view.elements.nameList.change(function(e){
      self.index = e.target.selectedIndex;
    });
    this.model.nameAddedObserver.attach(function(n){
      self.refresh(n);
    });
    this.model.nameRemovedObserver.attach(function(n){
      self.refresh(n);
    });
    this.refresh(this.model.getNames());
  },
  addName: function(){
    var name = prompt('Add a new user name: ', '');
    if(name){
      this.model.add(name);
      this.index = -1;
    }
  },
  removeName: function(){
    if(this.index > -1){
      this.model.remove(this.index);
      this.index = -1;
    }
    else{
      alert("No name was selected");
    }
  },
  refresh: function(names){
    this.view.elements.nameList.html('');
    for(var i = 0, len = names.length; i < len; i++){
      this.view.elements.nameList.append('<option>' + names[i] + '</option>');
    }
    this.view.elements.nameCount.text("Total names: " + len);
  }
};
