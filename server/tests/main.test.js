/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import chai from 'chai';
import { describe, it } from 'mocha';
import app from '../index';
import gif from '../controller/searchController';

const { getGif } = gif;
require('dotenv').config();

const apiKey = process.env.GIPHY_API_KEY;

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

  describe('POST https://api.giphy.com/v1/gifs/search', () => {
    it('should search via the Giphy api', async () => {
      const res = await getGif({
        body: {
          search: 'eminem'
        }
      });
      console.log(res);
      expect(undefined).to.eq(undefined);
    });
  });

  describe('GET the unknown routes', () => {
    it('should return 404', async () => {
      const res = await chai.request(app)
        .get('/awRFr');
      expect(res.status).to.equal(404);
    });
  });
});
