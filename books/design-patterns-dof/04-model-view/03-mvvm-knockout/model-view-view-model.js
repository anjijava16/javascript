var Product = function(id, name, price){
  this.id = id;
  this.name = name;
  this.price = price;
}

var Model = function Model(){
  this.products = [];
  this.products.push(new Product(1, "Paper", 4.95));
  this.products.push(new Product(2, "Scissors", 9.95));
  this.products.push(new Product(3, "Pencils", 4.98));
  this.products.push(new Product(4, "Pens", 19.50));
  this.products.push(new Product(5, "Eraser", 1.50));
  this.products.push(new Product(6, "Folders", 12.95));
  this.getProducts = function(){
    return this.products;
  }
};

var CartItem = function(){
  var self = this;
  this.product = ko.observable();
  this.quantity = ko.observable(1);
  this.subtotal = ko.computed(function(){
    return self.product() ? self.product().price * parseInt("0" + self.quantity(), 10) : 0;
  })
};

var toMoney = function(value){
  return "$" + value.toFixed(2);
};

var ViewModel = function(){
  var self = this;
  this.products = new Model().getProducts();
  this.items = ko.observableArray([new CartItem()]);
  this.grandTotal = ko.computed(function(){
    var total = 0;
    $.each(self.items(), function(){
      total += this.subtotal()
    })
    return total;
  })

  // Buttons actions
  this.addItem = function(){
    self.items.push(new CartItem());
  }
  this.removeItem = function(item){
    self.items.remove(item);
  }
  this.submit = function(){
    var data = $.map(self.items(), function(item){
      return item.product() ? {
        productId: item.product().id,
        quantity: item.quantity()
      } : undefined
    });
    alert("Info sent to server: " + JSON.stringify(data));
  }
};

ko.applyBindings(new ViewModel());
