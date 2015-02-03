suite('Calc', function () {
  suite('suite-1', function () {
    suiteSetup(function () {
    });

    suiteTeardown(function () {
    });

    test('add', function () {
      var calc = new App.Calc();
      var result = calc.add(1, 2);
      console.log(result);
      assert.equal(result, 3);
    });
  });
});
