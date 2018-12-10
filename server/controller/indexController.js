/* eslint-disable class-methods-use-this */

/** Class that handles the index/root route */
class indexController {
  /**
     * Get the / route.
     * @param {object} req the request object.
     * @param {object} res the response object.
     * @return  {Function} next calls the next middleware
     *
     */
  getRoot(req, res) {
    return res.status(200)
      .send('<h2 style="color:blue;">Welcome to the field Giphy app</h2><br><p><a href="/search">visit the Search page here</a></p>');
  }
}

const indexController1 = new indexController();
export default indexController1;
