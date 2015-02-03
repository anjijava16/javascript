var express = require('express');
var nodemailer = require('nodemailer');

var app = express();

app.use(function(req, res, next){
    var transporter = nodemailer.createTransport();

// setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'pwillhan@gmail.com', // sender address
        to: 'pwillhan@gmail.com', // list of receivers
        subject: 'testing nodemailer', // Subject line
        text: 'hello, testing nodemailer', // plaintext body
        html: '<b>hello, testing nodemailer</b>' // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });

    res.send('email sent.');
});

app.listen(3000, function(){
    console.log('app started at port 3000');
});
