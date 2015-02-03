var config = {
  secret: 'my secret',
  url: 'redis://localhost',
  routes: {
    register: '/register',
    login: '/login',
    logout: '/logout',
    chat: '/chat'
  }
};

module.exports = config;
