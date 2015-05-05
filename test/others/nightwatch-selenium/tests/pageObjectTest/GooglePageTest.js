module.exports = {
  'Test': function (client) {
    client
      .page.GooglePage().goToGoogle()
      .assert.title('Google')
      .end();
    client
        .page.GooglePage().action2();
  }
};
