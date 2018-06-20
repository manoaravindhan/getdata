var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());
var tabledata = [{
  "id": 1,
  "first_name": "Annadiane",
  "last_name": "Dugue",
  "email": "adugue0@nymag.com",
  "sex": "Female"
}, {
  "id": 2,
  "first_name": "Jodi",
  "last_name": "Eadmeades",
  "email": "jeadmeades1@tuttocitta.it",
  "sex": "Female"
}, {
  "id": 3,
  "first_name": "Frederik",
  "last_name": "McCorry",
  "email": "fmccorry2@shareasale.com",
  "sex": "Male"
}, {
  "id": 4,
  "first_name": "Sheffie",
  "last_name": "Brauner",
  "email": "sbrauner3@wordpress.org",
  "sex": "Male"
}, {
  "id": 5,
  "first_name": "Cathlene",
  "last_name": "Matuszinski",
  "email": "cmatuszinski4@who.int",
  "sex": "Once"
}, {
  "id": 6,
  "first_name": "Lars",
  "last_name": "Danniell",
  "email": "ldanniell5@stanford.edu",
  "sex": "Male"
}, {
  "id": 7,
  "first_name": "Pernell",
  "last_name": "Crenshaw",
  "email": "pcrenshaw6@house.gov",
  "sex": "twice"
}, {
  "id": 8,
  "first_name": "Miller",
  "last_name": "Imlacke",
  "email": "mimlacke7@163.com",
  "sex": "lots of time"
}, {
  "id": 9,
  "first_name": "Rob",
  "last_name": "Crufts",
  "email": "rcrufts8@gmpg.org",
  "sex": "Male"
}, {
  "id": 10,
  "first_name": "Yuri",
  "last_name": "Pridie",
  "email": "ypridie9@gov.uk",
  "sex": "Male"
}];
app.get('/',function(req,res){
  res.send("Server up and running");
});
function table(req,res){
	res.status = 200;
	res.statusText = "Data loaded";
	res.json(tabledata);
}
app.post('/table',table);
app.get('/table',table);
app.get('/nodata',function(req,res){
	res.status(404).send({
		message: 'No Data Found'
 });
});
// error handlers
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }));
});

module.exports = app;