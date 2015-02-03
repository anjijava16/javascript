calc = require("../../src/calc.js")
assert = require("chai").assert
describe "calc tests", ->
  describe "simple maths", ->
    it "should be easy to add", ->
      assert.equal calc.add(2, 4), 6, "two plus four is six"
      return

    it "should be easy to subtract", ->
      assert.equal calc.subtract(4, 2), 2, "four minus 2 is two"
      return

    return

  return
