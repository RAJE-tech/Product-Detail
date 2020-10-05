const express = require('express');
const app = express();
const port = 3001;

app.use(express.static('dist'));

app.listen(port, () => {
  console.log('Product Detail listening at http://localhost:' + port);
});
