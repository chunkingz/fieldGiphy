import express from 'express';
import searchController from '../controller/searchController';
import indexController from '../controller/indexController';
// import notfoundController from '../controller/notfoundController';

const { getRoot } = indexController;
const { getSearch, getGif } = searchController;

const router = express.Router();

router.get('/', getRoot);

router.get('/search', getSearch);

router.post('/search', getGif);

// router.all('*', notfoundController.notFound);

export default router;
