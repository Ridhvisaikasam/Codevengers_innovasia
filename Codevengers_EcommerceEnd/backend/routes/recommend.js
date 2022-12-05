const express = require('express')
const mongoose = require("mongoose");
const routes = express()
const soilinfo = require('../models/recommendation');

routes.post('/recommend/:x', async (req, res) => {
  const recom = await soilinfo.findOne({userid:mongoose.Types.ObjectId(req.params.x)});
  res.send({data:recom});
})

module.exports=routes