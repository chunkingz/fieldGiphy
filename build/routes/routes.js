"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _searchController = _interopRequireDefault(require("../controller/searchController"));

var _indexController = _interopRequireDefault(require("../controller/indexController"));

// import notfoundController from '../controller/notfoundController';
var getRoot = _indexController["default"].getRoot;
var getSearch = _searchController["default"].getSearch,
    getGif = _searchController["default"].getGif;

var router = _express["default"].Router();

router.get('/', getRoot);
router.get('/search', getSearch);
router.post('/search', getGif); // router.all('*', notfoundController.notFound);

var _default = router;
exports["default"] = _default;