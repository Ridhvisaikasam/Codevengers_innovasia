const mongoose=require('mongoose');
const mongouri="Please enter your database uri";
const connecttoMongo=()=>{
    mongoose.connect(mongouri,()=>{
        console.log("connected to mongo");
    })
}
module.exports=connecttoMongo;