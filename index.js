var app = require('./app');


app.set('port', process.env.PORT || 3000);


var server = app.listen(app.get('port'), function() {
  console.log('Server started at port:' + app.get('port'));
});
