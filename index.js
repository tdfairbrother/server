var express = require('express');
var app = express();
var render = require('./lib/render_react');
var Application = require('TF-App');

console.log(Application)

app.get('/', render(Application));

exports.app = app;