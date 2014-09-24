var express = require('express');
var app = express();
var render = require('./lib/render_react');
var nodejsx     = require('node-jsx').install();
var Application = require('TF-App');

app.get('/', render(Application));

exports.app = app;