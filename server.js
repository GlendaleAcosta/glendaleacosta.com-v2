var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var PORT = process.env.PORT || 3075;
var app = express();


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('app/src'));
app.use(express.static('app/public'));


// Routes
app.all('/.*/', function(req, res, next){
    var host = req.get('host');
    if (host.match(/^www\..*/i)) {
        next();
  } else {
    res.redirect(301, "http://www." + host);
  }
})
app.get('/resume', function(req,res,next){
    res.download(path.join(__dirname, 'Glendale-Acosta-Resume.pdf'), 'Glendale-Acosta-Resume.pdf', function(err){
        if(err){
            console.log(err);
        } else {
            console.log("download complete!");
        }
    })
})
app.post('/contact', function(req, res, next){
    var that = this;
    var contactInfo = req.body.contactInfo;
    
    let transporter = nodemailer.createTransport({
        service: 'hotmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'silentpony@hotmail.com',
            pass: '123qweASDF'
        }
    });    

    let mailOptions = {
        from: '"glendaleacosta.com <silentpony@hotmail.com>', 
        to: 'gglendale17@gmail.com', 
        subject: contactInfo.subject, 
        
        html: 
            '<ul>  \
                <li>Name: ' + contactInfo.name + '</li> \
                <li>Email: ' + contactInfo.email + '</li> \
                <li>Message: ' + contactInfo.message + '</li> \
            </ul>'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            return res.json({
                msg: "Whoops, try again later."
            })
        }
        return res.json({
            msg: "You message has been sent!"
        })    
    });
    
});
app.get('/*', function(req,res,next){
    res.sendFile(path.join(__dirname, 'app', 'public', 'index.html'));
});


// Server
app.listen( PORT , () => {
    console.log("App is up on port " + PORT);
});
