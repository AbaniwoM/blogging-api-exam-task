const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Blog");
});


//import the routes
const userRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
app.use("/api/users/", userRoute);
app.use("/api/posts/", postRoute);
app.use("/api/categories/", categoryRoute);


module.exports = app;

