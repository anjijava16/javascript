module.exports = {
  'Test': function (client) {
    client
      .page.GooglePage().goToGoogle()
      .assert.title('Google')
      .end();
  }
};
