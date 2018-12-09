import express from 'express';
import searchController from '../controller/searchController';
import indexController from '../controller/indexController';
// import notfoundController from '../controller/notfoundController';

const router = express.Router();

/** handles the index/root route */
router.get('/', indexController.getRoot);

router.get('/search', searchController.getSearch);

/** handles the search route */
router.post('/search', searchController.getGif);

/** handles not found routes */
// router.all('*', notfoundController.notFound);

export default router;
