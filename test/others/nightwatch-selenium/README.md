nightwatch-selenium
===================

Check out http://nightwatchjs.org/ for more info about nightwatch js.

The test code sample navigates to google.com, performs actions and validations

### Install Nightwatch

$ npm install -g nightwatch

### Running the Selenium Server

download the latest selenium-server-standalone from http://selenium-release.storage.googleapis.com/index.html

By the time it is written (9/23/2014), I did following

download the latest selenium-server-standalone-2.43.1.jar

Running Selenium Manually on the where you download the selenium-server-standalone-2.43.1.jar

$ java -jar selenium-server-standalone-2.43.1.jar

### Run Test

$ nightwatch -t tests/demotest.js

### Reference

> http://nightwatchjs.org/api#assertions

