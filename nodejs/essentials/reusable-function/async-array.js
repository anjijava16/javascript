console.log('#begin');
var products = [
  { name: 'Hood River Tour', sku: 723 },
  { name: 'Oregon Coast Tour', sku: 446 },
  { name: 'Rock Climbing in Bend', sku: 944 }
];

var result = products.filter(function(p) {
  if(723 === p.sku) return true;
  return false;
});

console.log('result:');
console.log(result);

// mocking product database
function Product(){
}
Product.find = function(sku, cb){
  // simulate long run
  setTimeout(function(){
    cb(null, products.filter(function(p) {
      if(sku === p.sku) return true;
      return false;
    }));
  }, 500);
};
var _sku = 723;
Product.find(_sku, function(err, product){
  if(err) return next(err);
  if(!product) return next(new Error('Unknown product SKU: ' + _sku));
  console.log('product:');
  console.log(product);
});

console.log('#end');
