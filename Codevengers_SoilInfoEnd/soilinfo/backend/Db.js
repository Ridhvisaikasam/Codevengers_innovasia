const mongoose=require('mongoose');
const mongouri="please enter your mongodb url here";
const connecttoMongo=()=>{
    mongoose.connect(mongouri,()=>{
        console.log("connected to mongo");
    })
}
module.exports=connecttoMongo;