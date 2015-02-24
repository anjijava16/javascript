express = require('express')
app = new express()
app.get "/user", (req, res) ->
  res.send 200,
    name: "tobi"

  return

module.exports = app
