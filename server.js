var express = require('express');
var path = require('path');

var PORT = process.env.PORT || 3075;
var app = express();


// Middleware
app.use(express.static('app/src'));
app.use(express.static('app/public'));

// Routes
app.get('/resume', function(req,res,next){
    // res.header('Content-disposition', 'inline; filename=' + 'Glendale-Acosta-Resume.pdf');
    // res.header('Content-type', 'application/pdf');
    res.download(path.join(__dirname, 'Glendale-Acosta-Resume.pdf'), 'Glendale-Acosta-Resume.pdf', function(err){
        if(err){
            console.log(err);
        } else {
            console.log("download complete!");
        }
    })
})
app.get('/*', function(req,res,next){
    res.sendFile(path.join(__dirname, 'app', 'public', 'index.html'));
});

// Server
app.listen( PORT , () => {
    console.log("App is up on port " + PORT);
});