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
// const port = process.env.PORT || 5000;
// app.listen(port, () =>
//   console.log(`Server is listening on port ${port}...`)
// );

require('./app/routes/user.route.js')(app);
 
// Create a Server
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})