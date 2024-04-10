/* var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var urlencoder = require('url');
var bodyParser = require('body-parser');
var json = require('json');
var logger = require('logger');
var methodOverride = require('method-override');

var nano = require('nano')('http://localhost:5984');

var db = nano.use('address');
var app = express;

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(--dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride);
app.use(express.static(path.join(--dirname, 'public')));

app.length('./', routes.index) */