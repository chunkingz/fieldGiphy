"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _axios = _interopRequireDefault(require("axios"));

/* eslint-disable class-methods-use-this */

/* eslint-disable no-console */

/* eslint-disable no-unused-vars */
require('dotenv').config();

var url = 'api.giphy.com/v1/gifs/search';
var apiKey = process.env.GIPHY_API_KEY;
var limit = 1;
/** Class for searching */

var searchController =
/*#__PURE__*/
function () {
  function searchController() {
    (0, _classCallCheck2["default"])(this, searchController);
  }

  (0, _createClass2["default"])(searchController, [{
    key: "getGif",

    /**
     * @param {object} req the request object.
     * @param {object} res the response object.
     * @return  {Function} next calls the next middleware
     *
     */
    value: function () {
      var _getGif = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var searchTerm, response, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                searchTerm = req.body.search; // check if string is empty

                if (!(searchTerm.length < 1 || searchTerm.replace(/[^a-zA-Z0-9]/g, '') === '')) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", res.status(400).render('index'));

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return _axios["default"].get("https://".concat(url, "?api_key=").concat(apiKey, "&q=").concat(searchTerm, "&limit=").concat(limit));

              case 6:
                response = _context.sent;
                data = response.data;
                _context.next = 10;
                return res.render('index', {
                  gifs: data.data[0]
                });

              case 10:
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 12]]);
      }));

      function getGif(_x, _x2) {
        return _getGif.apply(this, arguments);
      }

      return getGif;
    }()
    /**
       * @param {object} req the request object.
       * @param {object} res the response object.
       * @return  {Function} next calls the next middleware
       *
       */

  }, {
    key: "getSearch",
    value: function getSearch(req, res) {
      return res.status(200).render('index');
    }
  }]);
  return searchController;
}();

var searchController1 = new searchController();
var _default = searchController1;
exports["default"] = _default;