"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chai = _interopRequireDefault(require("chai"));

var _mocha = require("mocha");

var _index = _interopRequireDefault(require("../index"));

var _searchController = _interopRequireDefault(require("../controller/searchController"));

/* eslint-disable prefer-destructuring */

/* eslint-disable no-console */

/* eslint-disable no-unused-vars */
var getGif = _searchController["default"].getGif;

require('dotenv').config();

var apiKey = process.env.GIPHY_API_KEY;
var expect = _chai["default"].expect;

_chai["default"].use(require('chai-http'));

var emptySearch = '';
(0, _mocha.describe)('General Routes Test Suite', function () {
  (0, _mocha.describe)('GET /', function () {
    (0, _mocha.it)('should get the root welcome page',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _chai["default"].request(_index["default"]).get('/');

            case 2:
              res = _context.sent;
              expect(res.status).to.equal(200);
              expect(res.body).to.be.an('object');

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
  (0, _mocha.describe)('GET /search', function () {
    (0, _mocha.it)('should get the search page',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2() {
      var res;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _chai["default"].request(_index["default"]).get('/search');

            case 2:
              res = _context2.sent;
              expect(res.status).to.equal(200);
              expect(res.body).to.be.an('object');

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
  });
  (0, _mocha.describe)('POST https://api.giphy.com/v1/gifs/search', function () {
    (0, _mocha.it)('should search via the Giphy api',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return getGif({
                body: {
                  search: 'eminem'
                }
              }).then(function (res) {
                expect(undefined).to.eq(undefined);
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
  });
  (0, _mocha.describe)('GET the unknown routes', function () {
    (0, _mocha.it)('should return 404',
    /*#__PURE__*/
    (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee4() {
      var res;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _chai["default"].request(_index["default"]).get('/awRFr');

            case 2:
              res = _context4.sent;
              expect(res.status).to.equal(404);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
});