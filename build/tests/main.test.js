'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _mocha = require('mocha');

var _index = require('../../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config(); /* eslint-disable prefer-destructuring */
/* eslint-disable no-console */

var expect = _chai2.default.expect;

_chai2.default.use(require('chai-http'));

(0, _mocha.describe)('General Routes Test Suite', function () {
  (0, _mocha.describe)('GET the root', function () {
    (0, _mocha.it)('should get the root welcome page', function (done) {
      _chai2.default.request(_index2.default).get('/').end(function (error, response) {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
        done();
      });
    });
  });

  (0, _mocha.describe)('GET the search', function () {
    (0, _mocha.it)('should get the search page', function (done) {
      _chai2.default.request(_index2.default).get('/search').end(function (error, response) {
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
        done();
      }).catch(function (err) {
        return console.log(err);
      });
    });
  });

  (0, _mocha.describe)('GET the Giphy api', function () {
    (0, _mocha.it)('should search via the Giphy api', function (done) {
      _chai2.default.request(_index2.default).get('http://api.giphy.com/v1/gifs/search?api_key=' + process.env.GIPHY_API_KEY + '&q=eminem&limit=1').then(function (res) {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.render).to.be.an('object');
        done();
      }, function (err) {
        console.log(err);
        done();
      });
    });
  });

  (0, _mocha.describe)('GET the unknown routes', function () {
    (0, _mocha.it)('should return 404', function (done) {
      _chai2.default.request(_index2.default).get('/awRFr').end(function (error, response) {
        expect(response.status).to.equal(404);
        done();
      });
    });
  });
});