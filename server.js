var config = require('./package.json');
var app = require(config.main).app;

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
