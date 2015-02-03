express = require("express")
app = express()

# to enable POST data handling, load bodyParser middleware
bodyParser = require("body-parser")

# parse application/x-www-form-urlencoded
app.use bodyParser.urlencoded(extended: false)

# parse application/json
app.use bodyParser.json()
app.set "views", "./views"
app.set "view engine", "jade"
app.get "/", (req, res) ->
  res.send "home"
  return

app.get "/signup", (req, res) ->
  res.render "signup-text",
    title: "Signup text!"

  return

app.post "/signup", (req, res) ->
  name = req.body.name
  email = req.body.email
  console.log "Name: " + name
  console.log "Email: " + email
  res.json req.body
  return

app.listen 3000, ->
  console.log "app started at port 3000"
  return
