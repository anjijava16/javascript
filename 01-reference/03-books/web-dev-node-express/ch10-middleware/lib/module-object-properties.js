module.exports = {
    firstProperty: function(req, res, next){
        console.log('firstProperty middleware in module');
        next();
    },

    secondProperty: function(req, res, next){
        console.log('secondProperty middleware in module');
        next();
    }
};
