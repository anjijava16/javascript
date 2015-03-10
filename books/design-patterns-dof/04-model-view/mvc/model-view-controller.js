var Model = function(names){
  this.names = names;
  this.nameAdded = new Observer();
  this.nameRemoved = new Observer();
};
Model.prototype = {
  add: function(name){
    this.names.push(name);
    this.nameAdded.notify(this.names);
  },
  remove: function(index){
    this.names.splice(index, 1);
    this.nameRemoved.notify(this.names);
  },
  getNames: function(){ return this.names; }
};
var Observer = function(){ this.observers = []; };
Observer.prototype = {
  attach: function(callback){ this.observers.push(callback); },
  notify: function(n){
    for(var i = 0, len = this.observers.length; i < len; i++){
      this.observers[i](n);
    }
  }
};
var Controller = function(model){ this.model = model; };
Controller.prototype = {
  addName: function(name){ this.model.add(name); },
  removeName: function(index){ this.model.remove(index); }
};
var View = function(elements){ this.elements = elements; };
View.prototype = {
  init: function(model, controller){
    var self = this;
    model.nameAdded.attach(function (n){ self.refresh(n); });
    this.elements.addButton.click(function(){
      var name = prompt('Add a new user name: ', '');
      if(name) controller.addName(name);
    });
    this.elements.removeButton.click(function(){
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
    console.log(len);
    console.log(this.elements);
    console.log(this.elements.nameCount);
    console.log(this.elements.nameCount.text);
    this.elements.nameCount.text("Total users: " + len);
  }
};
