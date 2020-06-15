// MongoDB driver
var MongoClient = require("mongodb").MongoClient;

require("dotenv").config();

var database, collection;

exports.open = function (callback) {
    MongoClient.connect(process.env.CCONNECTION_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, (error, client) => {
        if (error) {
            throw error;
            console.log("Error initialising database");
        }
        database = client.db(process.env.CDB_NAME);
        collection = database.collection(process.env.CDB_COLLECTION_NAME);

        console.log("Connected to database: " + process.env.CDB_NAME + " collection: " + process.env.CDB_COLLECTION_NAME);

    });
};

exports.getCars = function (callback) {
    var cars;

    collection
        .find().toArray(function (err, items) {
            if (err) {
                callback(err);
            } else {
                cars = items;
            }
            return callback(null, cars);
        });

};

exports.getCar = function (req, callback) {
    var car;

    collection
        .find(req).toArray(function (err, item) {
            if (err) {
                throw err;
            } else {
                car = item;
            }
            return callback(null, car);
        })
}