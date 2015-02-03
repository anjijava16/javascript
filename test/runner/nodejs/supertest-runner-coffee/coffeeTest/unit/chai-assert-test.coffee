assert = require("chai").assert
describe "Example", ->
  it "should do a synchronous test", ->
    assert.ok true
    return

  it "should do on asynchronous test", (done) ->
    setTimeout (->
      assert.ok true
      done()
      return
    ), 15
    return
  return
