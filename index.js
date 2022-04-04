const express = require('express');
var cors = require('cors')
const con = require('./config');
const app = express();
app.use(cors())

app.get('/api/location', (req, resp) => {
  console.log(req.query.q);
  con.query("select * from locations where name like '%".concat(req.query.q).concat("%'"), (err, result) => {

    if (err) {
      resp.send("error")
    } else {
      resp.send(result)
    }
  })
});

app.listen(50001)

