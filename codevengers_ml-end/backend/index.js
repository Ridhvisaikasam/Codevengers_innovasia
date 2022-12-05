const connecttoMongo=require('./Db');
var cors = require('cors')
connecttoMongo();
const express = require('express')
const port=5000;
const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/soil',require('./routes/soil'));
app.use('/api/recommend',require('../backend/routes/recommend'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})