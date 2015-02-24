module.exports = {
  setUp: function(){
    console.log('#setUp()');
  },
  before: function(browser){
    console.log("#before()");
  },
  after: function(){
    console.log("#after()");
  },
  beforeEach: function(browser){
    console.log("#beforeEach()");
  },
  afterEach: function(){
    console.log("#afterEach()");
  },
  "Demo test Google": function (browser) {
    var tbValue = undefined;
    browser
      .url("http://www.google.com")
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .waitForElementVisible("#main", 1000)
      .pause(1000)
      .assert.containsText('#main', 'The Night Watch')
      // verify textbox is not empty by using this.assert in callback function
      .getValue('#gbqfq', function (result) {
        console.log('###', result.value);
        tbValue = result.value;
        this.assert.equal(result.value, 'nightwatch', 'search textbox contains nightwatch');
        this.assert.notEqual(result.value, '', 'search textbox is not empty');
      })
      .windowHandles(function(result) { // where we can use browser again
        console.log('###', tbValue);
        if(tbValue){
          browser
            .url("http://www.yahoo.com")
            .waitForElementVisible('body', 1000)
        }
      })
      .pause(1000)
      .end();
  }
};
