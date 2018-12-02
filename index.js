/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import express from 'express';
import axios from 'axios';
import 'babel-polyfill';
import path from 'path';
import dust from 'dustjs-helpers';
import consolidate from 'consolidate';
import bodyParser from 'body-parser';

// get the env vars
require('dotenv').config();

const app = express();
app.engine('dust', consolidate.dust);
app.set('view engine', 'dust');
app.set('views', path.join(__dirname, '../views'));

// parse incoming requests with middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => res.status(200).send('<h2>Welcome to the field Giphy app</h2>'));

app.get('/search/', (req, res) => res.render('index'));


const url = 'api.giphy.com/v1/gifs/search';
const apiKey = process.env.GIPHY_API_KEY;
const limit = 1;

app.post('/search', (req, res) => {
  const searchTerm = req.body.search;
  const isValid = /[^a-zA-Z_\s]/;
  // check if string is empty
  if (searchTerm.length < 1 || searchTerm.replace(/[^a-zA-Z0-9]/g, '') === '') return res.render('index');
  // console.log(`search keyword: ${searchTerm}`);

  axios.get(`https://${url}?api_key=${apiKey}&q=${searchTerm}&limit=${limit}`)
    .then((searchResponse) => {
      const {
        config, data, headers, request, status, statusText
      } = searchResponse;
      // console.log(data.data[0].type, data.data[0].title, data.data[0].id);
      res.render('index', { gifs: data.data[0] });
    }).catch((err) => {
      // console.log(err);
      res.send(err);
    });
});

app.all('*', (req, res) => {
  res.status(404).send('<h2>This route was not found please enter a valid route...</h2>');
});

// start server on port
const server = app.listen(process.env.PORT, () => {
  console.log('field-Giphy app is listening on port', server.address().port);
});

export default app;
