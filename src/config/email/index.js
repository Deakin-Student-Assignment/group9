const mailjet = require('node-mailjet');
require("dotenv").config();


module.exports.sendEmail = function (res, callback) {

    const request = new mailjet(
            process.env.MJ_APIKEY_PUBLIC,
            process.env.MJ_APIKEY_PRIVATE
        ).post("send", {
            'version': 'v3.1'
        })
        .request({
            "Messages": [{
                "From": {
                    "Email": "coxco@deakin.edu.au",
                    "Name": "Connie Cox"
                },
                "To": [{
                    "Email": res.body.client.email,
                    "Name": res.body.client.First_name + " " + res.body.client.Surname
                }],
                "Subject": "Book-A-Car Confirmation Email",
                "TextPart": "Hi There " + res.body.client.First_name + ". Your booking for delivery on " + res.body.bookingdate.start + " is now confirmed.  Thank you for booking with us!"
            }]
        })
        .then((result) => {
            console.log(result.body);
        })
        .catch((err) => {
            console.log(err.statusCode);
        })
    /*
    const msg = {
        to: request.body.client.email,
        from: 'no-reply@book-a-car.com',
        subject: 'Confirmation Email',
        text: "HiYour booking for delivery on: " + request.body.bookingdate.start + "is now confirmed."
    };

    sgMail.send(msg);*/
    //return callback(200);
};