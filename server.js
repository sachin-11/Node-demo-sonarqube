const express = require('express');
const bodyParser = require('body-parser');
 require('dotenv').config();
const app = express();
const port = process.env.PORT || 8888;

const apiRoute = require('./app/controllers/api');
const middlewares = require('./app/middleware/common-middleware');

app.use(bodyParser.json());
app.use(middlewares.setDefaultHeaders);

app.get('/', (req, res) => {
  res.send('This is the node API app!');
});

app.use('/api', apiRoute);

if (!module.parent) {
  app.listen(port, () => console.log(`App booted on port ${port}`));
}

module.exports = app;
