const express = require('express')
const routes = express()
const userinfo=require('../Modules/auth');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
routes.post(
    '/',[ body('emailid').isEmail(),
    body('password').isLength({ min: 5 })],
    async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array(),success:false});
      }
     let user=await userinfo.findOne({emailid:req.body.emailid});
     if(user){
        return res.status(404).json({error:"user with is email already exists",success:false});
     }
     const salt = await bcrypt.genSaltSync(10);
     const hash = await bcrypt.hashSync(req.body.password, salt);
      user=await userinfo.create({
        password: hash,
        emailid:req.body.emailid,
      })

      res.send({data:user});
    }
  );
  routes.post(
    '/login',[
    body('emailid').isEmail(),
    body('password').isLength({ min: 5 })],
    async (req, res) => {
        let s = false;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        s=false
        return res.status(400).json({errors: errors.array()});
      }
     let user=await userinfo.findOne({emailid:req.body.emailid});
     if(user){
      if(bcrypt.compareSync(req.body.password,user.password)){
            s=true
      }
      else{
           s=false;
        return res.status(404).json({errors:"incorrect password"});
      }
     }
     else{
      s =false
      return res.status(500).json({errors:"user does not exists"});
     }
     const data={
      user:{
        id:user.id
      }
    }
    var token = jwt.sign(data,"ruthikreddy");
        res.json({token:token,success:s});
    }
  );
  module.exports=routes