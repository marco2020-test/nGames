'use strict'

import * as express from 'express'

var listasController = require('./listas-controller');

var api = express.Router();
console.log('En el route nuevo');
api.get('/searchList/prueba', listasController.searchList);

module.exports = api;
