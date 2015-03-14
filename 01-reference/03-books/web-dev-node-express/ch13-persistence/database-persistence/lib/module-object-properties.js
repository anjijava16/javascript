module.exports = {
    checkWaivers: function(req, res, next){
        console.log('middleware checkWaivers in module');
        next();
    },

    checkGuestCounts: function(req, res, next){
        console.log('middleware checkGuestCounts in module');
        next();
    }
};
