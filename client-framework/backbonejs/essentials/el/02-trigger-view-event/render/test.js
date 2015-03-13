var View = Backbone.View.extend({
  events: {
    'click': 'onClick'
  },
  onClick: function(){
    alert('clicked');
  },
  render: function(){
    this.$el.html('<b>$el within render() example</b>');
    return this;
  }
});

$(function(){
  var view = new View();
  view.$el.trigger('click');
});
