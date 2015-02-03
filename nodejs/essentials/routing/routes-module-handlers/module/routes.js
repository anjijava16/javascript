module.exports = function(app){
    app.get('/', function (req, res) {
        res.send('index from module');
    });

    app.get('/about', function(req, res) {
        res.send('about from module');
    });

    app.get('/cart', function(req, res) {
        res.send('cart from module');
    });

    app.get('/cart/checkout', function(req, res) {
        res.send('cart - checkout from module');
    });

    app.get('/contact', function(req, res) {
        res.send('contact from module');
    });
};
