const soilinfo= require("../models/seedInfoModel");
const express = require("express");
const router = express.Router();

router.route('/seedInfo/:id').post(async (req,res)=>{

    const data=await soilinfo.findById(req.params.id);
    res.send(data);
  });

module.exports = router;