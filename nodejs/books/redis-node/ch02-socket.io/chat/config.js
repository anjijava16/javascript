var config = {
  port: 3000,
  secret: 'my secret',
  redisPort: 6379,
  redisHost: 'localhost',
  redisUrl: 'redis://localhost',
  routes: {
    login: '/account/login',
    logout: '/account/logout'
  }
};

module.exports = config;
