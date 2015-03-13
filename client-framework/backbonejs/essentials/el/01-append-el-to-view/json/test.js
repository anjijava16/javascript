var View = Backbone.View.extend({
  el: "<b>el example</b>"
});

$(function(){
  var view = new View();
  var htmlElement = view.render().el;
  console.log(htmlElement);
  $('body').append(htmlElement);
});
