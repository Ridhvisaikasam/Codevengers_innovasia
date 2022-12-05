const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  userid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Auth"
  },
  aadharcard:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  location:String,
  landarea:String, 
  N: String,
  P: String,
  K: String,
  ph: String
 
});
const Soil=mongoose.model('soilinfo',blogSchema);
module.exports=Soil;