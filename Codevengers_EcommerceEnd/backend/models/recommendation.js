const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    recommended: String,
    
});
const Soil = mongoose.model('recommendation', blogSchema);
module.exports = Soil;