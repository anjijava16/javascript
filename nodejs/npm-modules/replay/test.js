assert = require("assert");
http = require("http");
replay = require("replay");

http.get({ hostname: "www.iheartquotes.com", path: "/api/v1/random" }, function(response) {
  response.body = "";
  response.on("data", function(chunk) {
    response.setEncoding('utf8'); // unless you can read buffer chunks
    response.body = response.body + chunk;
    console.log(chunk);
  });
  response.on("end", function() {

    // Now check the request we made to the I <3 Quotes API
    assert.equal(response.statusCode, 200);
    console.log(response.body);
    assert.equal(response.body, "Oxymoron 2. Exact estimate\n\n[codehappy] http://iheartquotes.com/fortune/show/38021\n");
    console.log("Woot!");
  });
});