exports.home = function(req, res){
    res.send('cart from handlers');
};

exports.checkout = function(req, res){
    res.send('cart - checkout from handlers');
};
