module.exports = function (browser) {
  // Each action is written as a separate method which must return the browser
  // object in order to be able to be queued
  this.goToGoogle = function() {
    browser
      .url('http://google.com')
      .waitForElementVisible('body', 1000);

    return browser;
  };
  this.action2 = function(){
    console.log('Google page object action_2');
  }
};
