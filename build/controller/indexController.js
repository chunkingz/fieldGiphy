"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/* eslint-disable class-methods-use-this */

/** Class that handles the index/root route */
var indexController =
/*#__PURE__*/
function () {
  function indexController() {
    (0, _classCallCheck2["default"])(this, indexController);
  }

  (0, _createClass2["default"])(indexController, [{
    key: "getRoot",

    /**
       * Get the / route.
       * @param {object} req the request object.
       * @param {object} res the response object.
       * @return  {Function} next calls the next middleware
       *
       */
    value: function getRoot(req, res) {
      return res.status(200).send('<h2 style="color:blue;">Welcome to the field Giphy app</h2><br><p><a href="/search">visit the Search page here</a></p>');
    }
  }]);
  return indexController;
}();

var indexController1 = new indexController();
var _default = indexController1;
exports["default"] = _default;