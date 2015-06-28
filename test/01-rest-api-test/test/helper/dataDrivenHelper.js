'use strict';
var expect = require('chai').expect;
var HttpClient = require('../common/httpClient').HttpClient;
var config = require('../config/config.' + (process.env.NODE_ENV || 'development') + '.json');

