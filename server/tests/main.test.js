/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */

import chai from 'chai';
import { describe, it } from 'mocha';
import app from '../../index';

require('dotenv').config();

const expect = chai.expect;

chai.use(require('chai-http'));

describe('General Routes Test Suite', () => {
  describe('GET the root', () => {
    it('should get the root welcome page', (done) => {
      chai.request(app)
        .get('/')
        .end((error, response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('object');
          done();
        });
    });
  });

  describe('GET the root', () => {
    it('should get the search page', (done) => {
      chai.request(app)
        .get('/search')
        .end((error, response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.be.an('object');
          done();
        });
    });
  });

  describe('GET the Giphy api', () => {
    it('should search via the Giphy api', (done) => {
      chai.request(app)
        .get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=eminem&limit=1`)
        .then((res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.render).to.be.an('object');
          done();
        }, (err) => {
          console.log(err);
          done();
        });
    });
  });

  describe('GET the unknown routes', () => {
    it('should return 404', (done) => {
      chai.request(app)
        .get('/awRFr')
        .end((error, response) => {
          expect(response.status).to.equal(404);
          done();
        });
    });
  });
});
