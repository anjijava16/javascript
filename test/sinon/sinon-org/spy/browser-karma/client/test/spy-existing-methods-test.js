var assert = chai.assert;

function person(name){
  this.name = name;
}
person.prototype.driveCar = function (){
  console.log('driveCar');
};
person.prototype.gotoWork = function (){
  console.log('gotoWork');
  this.driveCar();
};
var tom = new person('Tom');

describe('sinon tests', function () {
  before(function () {
    console.log('before is called');
    sinon.spy($, "ajax");
    sinon.spy(tom, "driveCar");
  });
  after(function () {
    console.log('after is called');
    $.ajax.restore(); // Unwraps the spy
    tom.driveCar.restore();
  });
  it("test should inspect jQuery.getJSON's usage of jQuery.ajax", function() {
    console.log('sinon ajax test');
    $.getJSON('http://localhost:3000/about');
    assert($.ajax.calledOnce);
  });
  it("test should inspect gotoWork's usage of driveCar", function() {
    console.log('sinon spy existing methods test');
    tom.gotoWork();

    assert(tom.driveCar.calledOnce);
  });
});