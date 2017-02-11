const mongoose = require("mongoose");
mongoose.Promise = Promise;
const Grid = require("gridfs-stream");
const fs = require("fs");
const express = require("express");
const app = express("/")
mongoose.connect("mongodb://localhost/newDb");
const conn = mongoose.connection;

app.set("view engine", "ejs"); // set the view engine
app.use(express.static("public"));

const uploadImages = require("./uploadImages");
const getASingleImage = require("./getASingleImage");
const getAllImages = require("./getAllImages");



// uploadImages(conn, "./images");
console.log(mongoose.connection.readyState);

app.get("/:img", (req, res) => {
    getASingleImage(conn, req.params.img, res)
})

app.get("/", (req, res) => {
    getAllImages(res)
        .catch(err => console.log(err))
})

app.listen(3000, (err) => {
    console.log("listening on port 3000")
})
