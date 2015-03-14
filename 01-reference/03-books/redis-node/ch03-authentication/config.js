var config = {
  port: 3000,
  secret: 'my secret',
  redisPort: 6379,
  redisHost: 'localhost',
  redisUrl: 'redis://localhost',
  routes: {
    login: '/account/login',
    logout: '/account/logout'
  },
  host: 'http://localhost:3000',
  crypto: {
    workFactor: 5000,
    keylen: 32,
    randomSize: 256
  }
};

module.exports = config;
