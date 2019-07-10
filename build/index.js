"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _consolidate = _interopRequireDefault(require("consolidate"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes/routes"));

/* eslint-disable no-console */

/* eslint-disable no-unused-vars */
var app = (0, _express["default"])();
app.engine('dust', _consolidate["default"].dust);
app.set('view engine', 'dust');
app.set('views', _path["default"].join(__dirname, 'views')); // parse incoming requests with middleware

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_routes["default"]); // app.use(express.json());

app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public'))); // start server on port

var server = app.listen(process.env.PORT, function () {
  console.log('field-Giphy app is listening on port', server.address().port);
});
var _default = app;
exports["default"] = _default;