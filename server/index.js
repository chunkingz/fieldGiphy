/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import express from 'express';
import path from 'path';
import consolidate from 'consolidate';
import bodyParser from 'body-parser';
import router from './routes/routes';

const app = express();
app.engine('dust', consolidate.dust);
app.set('view engine', 'dust');
app.set('views', path.join(__dirname, 'views'));

// parse incoming requests with middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

// app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// start server on port
const server = app.listen(process.env.PORT, () => {
  console.log('field-Giphy app is listening on port', server.address().port);
});

export default app;
