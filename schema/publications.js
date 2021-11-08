const mongoose = require('mongoose');

//publictions schema
const PublicationSchema = mongoose.Schema({
    id: Number,
    name: String,
    books:[String],
});

const PublicationModel = mongoose.model("publication",PublicationSchema);
module.exports = PublicationModel;