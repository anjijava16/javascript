request = require("supertest")
app = require("../../server/server.js")
should = require("should")
describe "supertest node server", ->
  it "node server url (/user) returns the correct json", (done) ->
    request(app).get("/user").expect("Content-Type", /json/).expect(200).end (err, res) ->
      throw err  if err
      res.body.name.should.equal "tobi"
      done()
      return

    return

  return
