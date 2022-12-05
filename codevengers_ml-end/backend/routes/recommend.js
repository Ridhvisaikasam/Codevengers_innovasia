const express = require('express')
const routes = express()
const recommendation = require('../models/recommendation');


routes.post('/:id', async (req, res) => {
    const soil = await recommendation.create({
        userid: req.params.id,
        recommended: req.body.recommended
    })
    res.send({ data: soil, success: true });
})
module.exports = routes