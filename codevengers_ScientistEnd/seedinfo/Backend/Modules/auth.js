const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
 emailid:String,
 password:String
 
});
const user=mongoose.model('scientistinfo',blogSchema);
module.exports=user;