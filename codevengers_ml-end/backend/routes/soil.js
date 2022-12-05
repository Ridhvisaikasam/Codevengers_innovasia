const express = require('express')
const routes = express()
const soilinfo = require('../models/soilinfo');

routes.post('/:id', async (req, res) => {
  const data = await soilinfo.findById(req.params.id);
  res.send(data);
})

routes.post('/xx/:id', async (req, res) => {
  const { spawn } = require('child_process');

  var ans = null;

  const url = 'http://localhost:5000/api/soil'
  const getinfo = async () => {

    const response = await fetch(`${url}/${req.params.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
    });

    let json = await response.json();
    var str = JSON.stringify(json);

    console.log(str);

    ans = JSON.parse(str);

    res.send({data:ans.aadharcard})
    return ans;
  }

  const s = getinfo();
  const a = '40'

  const childPython = spawn('python', ['./routes/knn.py', `${a}`, `${s.P}`, '19', '34.5421695', '34.13737127', '4.697750704', '96.51524028']);

  childPython.stdout.on('data', (data) => {
    console.log(`${data}`);
  });

  childPython.stderr.on('data', (data) => {
    console.error(`stderr : ${data}`);
  });

  childPython.on('close', (code) => {
    console.log(`child process exit with code ${code}`)
  });
})

module.exports = routes