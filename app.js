const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

app.use(express.json());


//import the routes
const userRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
app.use("/api/users/", userRoute);
app.use("/api/posts/", postRoute);
app.use("/api/categories/", categoryRoute);

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connected");
});

app.listen(3000, () => console.log("Listening in port 3000"));

