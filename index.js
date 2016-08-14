var express = require('express');
var path = require('path');
var port = 3456;

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static(__dirname + '/assets'));

app.get('/', function(request, response) {
	response.render('index.ejs');
});

app.listen(port);