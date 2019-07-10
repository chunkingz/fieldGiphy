/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import axios from 'axios';

require('dotenv').config();

const url = 'api.giphy.com/v1/gifs/search';
const apiKey = process.env.GIPHY_API_KEY;
const limit = 1;

/** Class for searching */
class searchController {
  /**
   * @param {object} req the request object.
   * @param {object} res the response object.
   * @return  {Function} next calls the next middleware
   *
   */
  async getGif(req, res) {
    const searchTerm = req.body.search;

    // check if string is empty
    if (searchTerm.length < 1 || searchTerm.replace(/[^a-zA-Z0-9]/g, '') === '') return res.status(400).render('index');

    try {
      const response = await axios.get(`https://${url}?api_key=${apiKey}&q=${searchTerm}&limit=${limit}`);
      const { data } = response;
      await res.render('index', { gifs: data.data[0] });
    } catch (err) {
      console.log(err);
    }
  }

  /**
     * @param {object} req the request object.
     * @param {object} res the response object.
     * @return  {Function} next calls the next middleware
     *
     */
  getSearch(req, res) {
    return res.status(200).render('index');
  }
}

const searchController1 = new searchController();
export default searchController1;
