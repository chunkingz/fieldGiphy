"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/* eslint-disable class-methods-use-this */

/** Class that handles 404(not found) routes */
var notfoundController =
/*#__PURE__*/
function () {
  function notfoundController() {
    (0, _classCallCheck2["default"])(this, notfoundController);
  }

  (0, _createClass2["default"])(notfoundController, [{
    key: "notFound",

    /**
         * Get all 404 routes.
         * @param {object} req the request object.
         * @param {object} res the response object.
         * @return  {Function} next calls the next middleware
         *
         */
    value: function notFound(req, res) {
      return res.status(404).send('<h2>This route was not found please enter a valid route...</h2>');
    }
  }]);
  return notfoundController;
}();

var notfoundController1 = new notfoundController();
var _default = notfoundController1;
exports["default"] = _default;