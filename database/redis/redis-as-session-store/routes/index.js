function index(req, res){
  console.log('cookies:');
  console.log(req.cookies);
  console.log('signedCookies:');
  console.log(req.signedCookies);
  res.cookie('IndexCookie', 'This was set from Index');
  res.render('index',
    {
      title: 'dynamic title',
      cookie: JSON.stringify(req.cookies),
      session: JSON.stringify(req.session),
      signedCookie: JSON.stringify(req.signedCookies)
    });
};
function login(req, res){
  res.render('login', {title: 'Login'});
};
function loginProcess(req, res){
  res.redirect('/');
};
function chat(req, res){
  res.render('Chat', {title: 'chat'});
};

module.exports.index = index;
module.exports.login = login;
module.exports.loginProcess = loginProcess;
module.exports.chat = chat;
