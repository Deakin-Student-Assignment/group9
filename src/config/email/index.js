// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports.sendEmail = function (request, callback) {


    const msg = {
        to: request.body.client.email,
        from: 'no-reply@book-a-car.com',
        subject: 'Confirmation Email',
        text: "HiYour booking for delivery on: " + request.body.bookingdate.start + "is now confirmed."
    };

    sgMail.send(msg);
    return callback(200);
};