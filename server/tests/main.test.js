/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */

import chai from 'chai';
import { describe, it } from 'mocha';
// import Axios from 'axios';
import app from '../index';

require('dotenv').config();

const expect = chai.expect;

chai.use(require('chai-http'));

const emptySearch = '';

describe('General Routes Test Suite', () => {
  describe('GET /', () => {
    it('should get the root welcome page', async () => {
      const res = await chai.request(app)
        .get('/');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
    });
  });

  describe('GET /search', () => {
    it('should get the search page', async () => {
      const res = await chai.request(app)
        .get('/search');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
    });
  });

  describe('POST /search', () => {
    it('should not search if input is empty', async () => {
      const res = await chai.request(app)
        .post('/search')
        .set('content-type', 'application/json')
        .send(emptySearch);
      expect(res.status).to.equal(500);
      console.log(emptySearch.length);
    });
  });

  /* describe('POST https://api.giphy.com/v1/gifs/search', () => {
    it('should search via the Giphy api', async () => {
      // const res = await chai.request(app);
      const res = await Axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=eminem&limit=1`);
      expect(res.status).to.equal(200);
    });
  }); */

  describe('GET the unknown routes', () => {
    it('should return 404', async () => {
      const res = await chai.request(app)
        .get('/awRFr');
      expect(res.status).to.equal(404);
    });
  });
});
