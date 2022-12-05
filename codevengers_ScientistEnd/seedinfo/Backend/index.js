const connecttoMongo=require('./Db');
var cors = require('cors')
connecttoMongo();
const express = require('express')
const port=5000;
const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/auth',require('./routes/auth'));
app.use('/api/auth/login',require('./routes/auth'));
app.use('/api/seedid',require('./routes/seedid'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})