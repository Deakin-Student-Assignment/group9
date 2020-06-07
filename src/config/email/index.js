// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
require("dotenv").config();



module.exports.sendEmail(request, callback) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: request,
        from: 'no-reply@book-a-car.com',
        subject: 'Confirmation Email',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    sgMail.send(msg);
};