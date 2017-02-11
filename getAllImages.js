const mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Use the collection with mongoose.
const Image = mongoose.model("Image",
            new Schema({filename : String, contentType : String, uploadDate : Date}),
            "fs.files"
        );

function getAllImages(res){
    return Image.find()
        .then((docs) =>{
            var imageNames = docs.map((e) => {
                return e.filename;
            })
            res.render("index", {
                imageNames
            })
        })
}

module.exports = getAllImages;
