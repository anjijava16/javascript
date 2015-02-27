var SMOKE = {};
SMOKE.testCustomer = function(){
  it('test-1 {type} {name}', function (ctx) {
    console.log('test-1' + ctx.type + ' customer ' + ctx.name);
  });
  it('test-2 {type} {name}', function (ctx) {
    console.log('test-2' + ctx.type + ' customer ' + ctx.name);
  });
};

module.exports = SMOKE;
