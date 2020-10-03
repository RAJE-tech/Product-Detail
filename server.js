const express = require('express');
const app = express();

app.use(express.static('dist'));

app.listen(3001, () => {
  console.log('Product Detail is listening on port 3001');
});
