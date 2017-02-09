var express = require('express');
var path = require('path');

var PORT = process.env.PORT || 3075;
var app = express();


// Middleware
app.use(express.static('app/src'));
app.use(express.static('app/public'));

// Routes
app.get('/*', function(req,res,next){
    res.sendFile(path.join(__dirname, 'app', 'public', 'index.html'));
});

// Server
app.listen( PORT , () => {
    console.log("App is up on port " + PORT);
});