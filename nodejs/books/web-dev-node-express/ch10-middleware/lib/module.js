module.exports = function(req,res,next) {
    console.log('middleware in module');
    next();
};
