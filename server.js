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
        service: 'hotmail',
        auth: {
            user: 'silentpony@hotmail.com',
            pass: '123qweASDF'
        }
    });    

    let mailOptions = {
        from: '"GlendaleAcosta" <silentpony@hotmail.com>', 
        to: 'gglendale17@gmail.com', 
        subject: "glendaleacosta.com: " + contactInfo.subject, 
        
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
        }
        
    });
    res.json({
        msg: "worked!"
    })
});
app.get('/*', function(req,res,next){
    res.sendFile(path.join(__dirname, 'app', 'public', 'index.html'));
});


// Server
app.listen( PORT , () => {
    console.log("App is up on port " + PORT);
});
