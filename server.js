const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, './dist')});
});

app.listen(3001, () => {
  console.log('Product Detail is listening on port 3001');
});
