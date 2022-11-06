const mongoose = require('mongoose');

const url = process.env.DB_CONNECTION

const connect = () => {
    mongoose.connect(url || 'http://localhost:3000')

    mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB Successfully");
    });

    mongoose.connection.on("error", (err) => {
        console.log("An error occurred while connecting to MongoDB");
        console.log(err);
    });
}

module.exports = connect;
