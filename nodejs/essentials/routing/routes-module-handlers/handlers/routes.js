var main = require('./main.js');
var cart = require('./cart.js');
var contact = require('./contact.js');

module.exports = function(app){
    app.get('/', main.home);

    app.get('/about', main.about);

    app.get('/cart', cart.home);

    app.get('/cart/checkout', cart.checkout);

    app.get('/contact', contact.home);
};
