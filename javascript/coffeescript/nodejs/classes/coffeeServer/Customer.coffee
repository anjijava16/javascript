Person = require('./Person')
class Customer extends Person
  constructor: (@name, @type) ->
    super(@name)

  order: (item) ->
    console.log("#{@type} customer #{@name} orders #{item}")

exports = module.exports = Customer
