exports.notFound = function notFound(req, res, next){
  //res.send(404, 'send 404');
  res.status(404).render('404', {title: 'Wrong Turn'});
};

exports.error = function error(err, req, res, next){
  console.log(err);
  //res.send(500, 'Something broke. What did you do?');
  res.status(500).render('500', {title: 'Mistakes Were Made'});
};
