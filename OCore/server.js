var express = require('express');
var bodyParser = require('body-parser');
var colors = require('colors');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCrossDomain);

// Routes
app.use('/api', require('./routes/api'));

var port = process.env.PORT || 3000;

app.listen(port);

console.log(colors.green('OCore started on: ' + port));