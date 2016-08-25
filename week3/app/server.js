var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/indexRouter');
var mongoose = require('mongoose');

mongoose.connect('mongodb://user:user@ds013366.mlab.com:13366/tinyrul');

app.use('/public', express.static(__dirname + "/public"));

app.use('/api/v1', restRouter);

app.use('/:shortUrl', redirectRouter);

app.use('/', indexRouter);

app.listen(3000);