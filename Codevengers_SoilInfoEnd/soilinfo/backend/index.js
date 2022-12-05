const connecttoMongo=require('./Db');
var cors = require('cors')
connecttoMongo();
const express = require('express')
const port=5000;
const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/soilput',require('./Routes/soilput'));
app.use('/api/soilput/getsoilinfo',require('./Routes/soilput'));
app.use('/api/auth',require('./Routes/auth'));
app.use('/api/auth/login',require('./Routes/auth'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})