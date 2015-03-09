var helper = require("./optimized-helper");

helper.Patterns.namespace("Classic").Template = (function () {
  var datastore = {
    process: function () {
      this.connect();
      this.select();
      this.disconnect();
      return true;
    }
  };
  return {datastore: datastore};
})();

(function run() {
  var utils = helper.Patterns.Utils.Common;
  var store = helper.Patterns.Classic.Template.datastore;
  var mySql = utils.inherit(store);

  // implement template steps
  mySql.connect = function () {
    utils.log.add("MySQL: connect step");
  };
  mySql.select = function () {
    utils.log.add("MySQL: select step");
  };
  mySql.disconnect = function () {
    utils.log.add("MySQL: disconnect step");
  };

  mySql.process();
  utils.log.show();
})();
