var View = Backbone.View.extend({
  el: "<b>el example</b>",
  events: {
    'click': 'onClick'
  },
  onClick: function(){
    alert("clicked");
  }
});

$(function(){
  var view = new View();
  view.$el.trigger('click');
});
