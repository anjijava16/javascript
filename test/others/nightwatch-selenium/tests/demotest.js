module.exports = {
    "Demo test Google": function (browser) {
        browser
            .url("http://www.google.com")
            .waitForElementVisible('body', 1000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('button[name=btnG]', 1000)
            .click('button[name=btnG]')
            .pause(1000)
            .assert.containsText('#main', 'The Night Watch')
            // verify textbox is not empty by using this.assert in callback function
            .getValue('#gbqfq', function (result) {
                this.assert.equal(result.value, 'nightwatch', 'search textbox contains nightwatch');
                this.assert.notEqual(result.value, '', 'search textbox is not empty');
            })
            .end();
    }
};
