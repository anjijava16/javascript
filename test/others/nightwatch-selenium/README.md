nightwatch-selenium
===================

Check out http://nightwatchjs.org/ for more info about nightwatch js.

The test code sample navigates to google.com, performs actions and validations

### Install Nightwatch

> `npm install -g nightwatch`

### Download chrome driver

> http://chromedriver.storage.googleapis.com/index.html

### Running the Selenium Server

download the latest selenium-server-standalone from http://selenium-release.storage.googleapis.com/index.html

By the time it is written (5/5/2015), I did following

download the latest selenium-server-standalone-2.45.0.jar

Running Selenium Manually on the where you download the selenium-server-standalone-2.45.0.jar

> `java -jar selenium-server-standalone-2.45.0.jar`

### Run Test

> `nightwatch -t tests/demotest.js`

### Reference

> http://nightwatchjs.org/api#assertions

### Run Page Objects Test - GooglePage.js is a page object

> http://nightwatchjs.org/guide#usage

> note: in nightwatch.json, set `"page_objects_path" : "tests/pageObject"`

> `nightwatch -t tests/pageObjectTest/GooglePageTest.js`
