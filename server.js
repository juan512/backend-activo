const express = require('express');
const bodyParser = require('body-parser');

const activoRoutes = require('./Routes/activoRoutes')
const loginRoutes = require('./Routes/loginRoutes')

const app = express();

app.use(bodyParser.json());

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.use(loginRoutes)
app.use(activoRoutes)

app.listen(5000); // start Node + Express server on port 8080
