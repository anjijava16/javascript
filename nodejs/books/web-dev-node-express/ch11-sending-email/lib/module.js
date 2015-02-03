module.exports = function(req,res,next) {
    console.log('middleware requiresWaiver in module');
    next();
};
