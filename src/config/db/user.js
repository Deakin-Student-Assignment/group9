// MongoDB driver
var MongoClient = require("mongodb").MongoClient;

require("dotenv").config();

var database, collection;

exports.open = function (callback) {
    MongoClient.connect(process.env.UCONNECTION_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }, (error, client) => {
        if (error) {
            throw error;
            console.log("Error initialising database");
        }
        database = client.db(process.env.UDB_NAME);
        collection = database.collection(process.env.UDB_COLLECTION_NAME);

        console.log("Connected to database: " + process.env.UDB_NAME + " collection: " + process.env.UDB_COLLECTION_NAME);

    });
};

module.exports.doInsertOne = function (request, callback) {
    var user;

    user = collection.insertOne(request, function (err, result) {
        if (err) {
            return status(500).send(error);
        } else {
            user = result;
            return callback(null, user);

        }

    });
};