const mongoose=require('mongoose');
const mongouri="mongodb+srv://root:codevengers@cluster0.wqlybo3.mongodb.net/?retryWrites=true";
const connecttoMongo=()=>{
    mongoose.connect(mongouri,()=>{
        console.log("connected to mongo");
    })
}
module.exports=connecttoMongo;