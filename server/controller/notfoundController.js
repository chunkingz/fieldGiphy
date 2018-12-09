/* eslint-disable class-methods-use-this */

/** Class that handles 404(not found) routes */
class notfoundController {
  /**
       * Get all 404 routes.
       * @param {object} req the request object.
       * @param {object} res the response object.
       * @return  {Function} next calls the next middleware
       *
       */
  notFound(req, res) {
    return res.status(404).send('<h2>This route was not found please enter a valid route...</h2>');
  }
}

const notfoundController1 = new notfoundController();
export default notfoundController1;
