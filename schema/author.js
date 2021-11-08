const mongoose = require('mongoose');
const { Author } = require('../database');

//Author schema
const AutherSchema = mongoose.Schema({
     
    id:Number,
    name:String,
    books:[String]

});

//model 
const AuthorModal = mongoose.model("author",AutherSchema);

module.exports = AuthorModal;