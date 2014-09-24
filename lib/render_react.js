var path        = require('path');
var url         = require('url');
var ReactAsync  = require('react-async');

function setup(ReactComponent) {
    function renderApp(req, res, next) {
        var path = url.parse(req.url).pathname;
        var app = ReactComponent({path: path});
        ReactAsync.renderComponentToStringWithAsyncState(app, function(err, markup) {
            if (err) {
                return next(err);
            }
            res.send('<!doctype html>\n' + markup);
        });
    }
    return renderApp;
}

module.exports = setup;