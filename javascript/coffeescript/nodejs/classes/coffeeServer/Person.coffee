class Person
  constructor: (@name) ->

  say: (msg) ->
    console.log("#{@name} says #{msg}")

exports = module.exports = Person
