// http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html

function Car1(desc){
  this.desc = desc;
  this.color = "red";
}

Car1.prototype = {
  getInfo: function(){
    return 'A ' + this.color + ' ' + this.desc + '.';
  }
};

var car1 = new Car1('Honda civic');
car1.color = "green";
console.log(car1.getInfo());

var Car2 = Object.create(null);  // this is an empty object, like {}
Car2.prototype = {
    getInfo: function(){
        return 'A ' + this.color + ' ' + this.desc + '.';
    }
};

var car2 = Object.create(Car2.prototype, {
    //value properties
    color: {writable: true, configurable: true, value: 'red'},
    // concrete desc value
    rawDesc: { writable: false, configurable: true, value: 'Porshe boxter'},
    // data properties (assigned using getters and setters)
    desc: {
        configurable:true,
        get: function() {
            return this.rawDesc.toUpperCase();
        },
        set: function(value){
            this.rawDesc = value.toUpperCase();
        }
    }
});

car2.color = "blue";
console.log(car2.getInfo());
