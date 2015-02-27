class Person
  constructor: (@name) ->

  say: (msg) ->
    console.log("#{@name} says #{msg}")

tom = new Person('Tom')
tom.say('hello!')

class Customer extends Person
  constructor: (@name, @type) ->
    super(@name)

  order: (item) ->
    console.log("#{@type} customer #{@name} orders #{item}")

ken = new Customer('Ken', 'vip')
ken.order('book')
