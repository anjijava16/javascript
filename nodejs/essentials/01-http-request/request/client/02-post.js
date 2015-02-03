var request = require('request');

request.post('http://localhost:3000/signup',
  {form: {
    name: 'tom@gmail.com',
    email: 'Tom'
  }},
  function(error, response, body){
    if(!error && response.statusCode === 200){
      console.log(body);
    }
  });
