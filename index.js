const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send({status: 'ok'});
});

const port = app.get('port')
app.listen(port, () => {
  console.log(`${port} 포트`);
});