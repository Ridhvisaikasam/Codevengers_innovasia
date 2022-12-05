const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"auth"
      },
 seedid:String,
 details:String,
 seedname:String,
 description:String
});

module.exports=mongoose.model('seedinfo',blogSchema);