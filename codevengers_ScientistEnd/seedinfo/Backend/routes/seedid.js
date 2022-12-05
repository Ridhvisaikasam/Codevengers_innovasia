const express = require('express')
const routes = express()
const soilinfo=require('../Modules/seedid');
const fetcher=require('../middleware/fetcher');
const { body, validationResult } = require('express-validator');
routes.post('/',fetcher,body("seedid").isNumeric(),async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
     return res.status(422).json({ errors: errors.array(),success:false });
    }
   const  soil=await soilinfo.create({ 
        userid:req.user.id,   
        seedid:req.body.seedid,          
        details: req.body.details,
        seedname: req.body.seedname,
        description :req.body.description,
        
      })
      res.send({data:soil,success:true});
})
routes.post('/getseedinfo',fetcher,async (req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array(),success:false});
  }
  const data=await soilinfo.find({userid:req.user.id});
  res.send(data);
})
routes.put('/update/:id',async (req,res)=>{

  const errors = validationResult(req);
    if (!errors.isEmpty()) {                            //this is for updateing the data in  the database
      return res.status(400).json({errors: errors.array()});
    }
    let newdata={};
    if(req.body.seedid){
        newdata.seedid=req.body.seedid;
    }
    if(req.body.details){
        newdata.details=req.body.details;
    }
    if(req.body.seedname){
        newdata.seedname=req.body.seedname;
    }
    if(req.body.description){
      newdata.description=req.body.description;
  }
  
    let data=await soilinfo.findById(req.params.id)
    if(!data){
        return res.status(404).json({error:"id not found bro"});
    }
    data=await soilinfo.findByIdAndUpdate(req.params.id,{$set:newdata},{new:true})
    res.send({data});

    }
)


module.exports=routes