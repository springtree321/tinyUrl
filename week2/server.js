var express = require('express');
var app = express();
var restRouter = require('./routes/rest');
var redirectRouter = require('./routes/redirect');
var indexRouter = require('./routes/indexRouter');

app.longToShortHash = {};
app.shortToLongHash = {};

app.use('/public', express.static(__dirname + "/public"));

app.use('/api/v1', restRouter);

app.use('/:shortUrl', redirectRouter);

app.use('/', indexRouter);

app.listen(3000);


/*
app.get('/', function(req, res) {
    res.send('express server');
    //res.json({name: 'James', age: 18});
});
*/






/*var http = require('http');
 var fs = require("fs");

 //http.createServer(function(req, res) {
 //res.writeHead(200, {"Conten-Type": "text-html"});
 //var html = fs.readFileSync(__dirname + '/index.html');
 //res.write("hello my darling");
 //res.end();
 //res.end(html);
 //res.end("<html><head></head><body>New Line</body></html>");
 //}).listen(3000);  //port: 3000




 http.createServer(function(req, res) {
 if (req.url === '/') {
 res.writeHead(200, {"Conten-Type": "text-html"});
 var html = fs.readFileSync(__dirname + '/index.html');
 res.end("<html><head></head><body>New Line</body></html>");
 }

 if (req.url === '/api') {
 res.writeHead(200, {"Conten-Type": "application/json"});
 var obj = {
 name: 'james',
 age: 30
 };
 res.end(JSON.stringify(obj));
 }
 }).listen(3000);  //port: 3000
 */