'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

require('babel-polyfill');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _dustjsHelpers = require('dustjs-helpers');

var _dustjsHelpers2 = _interopRequireDefault(_dustjsHelpers);

var _consolidate = require('consolidate');

var _consolidate2 = _interopRequireDefault(_consolidate);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// get the env vars
require('dotenv').config(); /* eslint-disable no-console */
/* eslint-disable no-unused-vars */

var app = (0, _express2.default)();
app.engine('dust', _consolidate2.default.dust);
app.set('view engine', 'dust');
app.set('views', _path2.default.join(__dirname, 'views'));

// parse incoming requests with middleware
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// app.use(express.json());
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.get('/', function (req, res) {
  return res.status(200).send('<h2>Welcome to the field Giphy app</h2>');
});

app.get('/search', function (req, res) {
  return res.render('index');
});

var url = 'api.giphy.com/v1/gifs/search';
var apiKey = process.env.GIPHY_API_KEY;
var limit = 1;

app.post('/search', function (req, res) {
  var searchTerm = req.body.search;
  var isValid = /[^a-zA-Z_\s]/;
  // check if string is empty
  if (searchTerm.length < 1 || searchTerm.replace(/[^a-zA-Z0-9]/g, '') === '') return res.render('index');
  // console.log(`search keyword: ${searchTerm}`);

  _axios2.default.get('https://' + url + '?api_key=' + apiKey + '&q=' + searchTerm + '&limit=' + limit).then(function (searchResponse) {
    var config = searchResponse.config,
        data = searchResponse.data,
        headers = searchResponse.headers,
        request = searchResponse.request,
        status = searchResponse.status,
        statusText = searchResponse.statusText;
    // console.log(data.data[0].type, data.data[0].title, data.data[0].id);

    res.render('index', { gifs: data.data[0] });
  }).catch(function (err) {
    // console.log(err);
    res.send(err);
  });
});

app.all('*', function (req, res) {
  res.status(404).send('<h2>This route was not found please enter a valid route...</h2>');
});

// start server on port
var server = app.listen(process.env.PORT, function () {
  console.log('field-Giphy app is listening on port', server.address().port);
});

exports.default = app;