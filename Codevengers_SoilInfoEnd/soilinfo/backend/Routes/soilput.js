const express = require('express')
const routes = express()
const soilinfo=require('../modules/soilinfo');
const fetcher=require('../middleware/fetcher');
const { body, validationResult } = require('express-validator');
routes.post('/',fetcher,async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
     return res.status(422).json({ errors: errors.array(),success:false });
    }
   const  soil=await soilinfo.create({ 
        userid:req.user.id,             
        aadharcard: req.body.aadharcard,
        location: req.body.location,
        landarea :req.body.landarea,
        N: req.body.N,
  P:req.body.P,
  K:req.body.K,
  ph:req.body.ph
      })
      res.send({data:soil,success:true});
})
routes.post('/getsoilinfo',fetcher,async (req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
   return res.status(422).json({ errors: errors.array(),success:false});
  }
  const data=await soilinfo.find({userid:req.user.id});
  res.send(data);
})
routes.put('/update/:id',fetcher,async (req,res)=>{

  const errors = validationResult(req);
    if (!errors.isEmpty()) {                            //this is for updateing the data in  the database
      return res.status(400).json({errors: errors.array()});
    }
    let newdata={};
    if(req.body.aadharcard){
        newdata.aadharcard=req.body.aadharcard;
    }
    if(req.body.location){
        newdata.location=req.body.location;
    }
    if(req.body.landarea){
        newdata.landarea=req.body.landarea;
    }
    if(req.body.watercontent){
      newdata.watercontent=req.body.watercontent;
  }
  if(req.body.phlevel){
    newdata.phlevel=req.body.phlevel;
}
if(req.body.calciumlevel){
  newdata.calciumlevel=req.body.calciumlevel;
}
if(req.body.grittytexture){
  newdata.grittytexture=req.body.grittytexture;
}
if(req.body.nutrientscontent){
  newdata.nutrientscontent=req.body.nutrientscontent;
}
if(req.body.livingorganisms){
  newdata.livingorganisms=req.body.livingorganisms;
}
if(req.body.soilorganicmatter){
  newdata.soilorganicmatter=req.body.soilorganicmatter;
}
if(req.body.previouscropgrown){
  newdata.previouscropgrown=req.body.previouscropgrown;
}
if(req.body.gascontent){
  newdata.gascontent=req.body.gascontent;
}
if(req.body.minerals){
  newdata.minerals=req.body.minerals;
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