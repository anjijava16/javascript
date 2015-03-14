var config = {
  port: 3000,
  secret: 'my secret',
  redisUrl: 'redis://localhost',
  routes: {
    login: '/account/login',
    logout: '/account/logout'
  }
};

module.exports = config;
