var express = require('express');
var swagger = require('swagger-framework');

var port = process.env.PORT || 8000;
var url = 'http://localhost:' + port;

var app = express();

var framework = swagger.Framework({ basePath: url });
app.use('/api-docs', framework.docs.dispatcher());
app.use('/', framework.dispatcher());

framework.server().listen(port);

