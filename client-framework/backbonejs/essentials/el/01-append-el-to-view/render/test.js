var View = Backbone.View.extend({
  render: function(){
    this.$el.html('<b>$el within render() example</b>');
    return this;
  }
});

$(function(){
  var view = new View();
  var htmlElement = view.render().el;
  console.log(htmlElement);
  $('body').append(htmlElement);
});
