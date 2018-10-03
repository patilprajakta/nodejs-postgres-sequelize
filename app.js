var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
const Sequelize = require('sequelize');
var sequelize = new Sequelize("postgres://postgres:root@localhost:5432/postgres");

//Test DB connection
sequelize.authenticate().then(function () {
  console.log('--------------Postgres DB connected------------');
  return true;
}).catch(function (err) {
  console.error('Postgres failed',err);
  return false;
});

const db = require('./app/config/db.config.js');
db.sequelize.sync().then(() => {
  console.log('-----Sync Models-----');
});

//set up local server
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Server is listening on port ${port}...`)
);