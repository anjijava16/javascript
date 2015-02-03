var express = require('express');

var app = express();

// mocking product database
function Product(){
}
Product.find = function(conditions, fields, options, cb){
    if(typeof conditions==='function') {
        cb = conditions;
        conditions = {};
        fields = null;
        options = {};
    } else if(typeof fields==='function') {
        cb = fields;
        fields = null;
        options = {};
    } else if(typeof options==='function') {
        cb = options;
        options = {};
    }
    var products = [
        {
            name: 'Hood River Tour',
            slug: 'hood-river',
            category: 'tour',
            maximumGuests: 15,
            sku: 723,
        },
        {
            name: 'Oregon Coast Tour',
            slug: 'oregon-coast',
            category: 'tour',
            maximumGuests: 10,
            sku: 446,
        },
        {
            name: 'Rock Climbing in Bend',
            slug: 'rock-climbing/bend',
            category: 'adventure',
            requiresWaiver: true,
            maximumGuests: 4,
            sku: 944,
        }
    ];
    cb(null, products.filter(function(p) {
        if(conditions.category && p.category!==conditions.category) return false;
        if(conditions.slug && p.slug!==conditions.slug) return false;
        if(isFinite(conditions.sku) && p.sku!==Number(conditions.sku)) return false;
        return true;
    }));
};
Product.findOne = function(conditions, fields, options, cb){
    if(typeof conditions==='function') {
        cb = conditions;
        conditions = {};
        fields = null;
        options = {};
    } else if(typeof fields==='function') {
        cb = fields;
        fields = null;
        options = {};
    } else if(typeof options==='function') {
        cb = options;
        options = {};
    }
    Product.find(conditions, fields, options, function(err, products){
        cb(err, products && products.length ? products[0] : null);
    });
};

app.get('/', function(req, res){
    var _sku = 723;
    var _guests = ['Tom', 'Dick', 'Harry'];
    var cart = [];
    Product.findOne({ sku: _sku }, function(err, product){
        if(err) return next(err);
        if(!product) return next(new Error('Unknown product SKU: ' + _sku));
        cart.push({
            product: product,
            guests: _guests
        })
    });
    res.json(cart);
});

app.listen(3000, function(){
    console.log('app started at port 3000');
});
