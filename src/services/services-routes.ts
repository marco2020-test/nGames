'use strict'

import * as express from 'express'

var servicesController = require('./services-controller');
var servicesControlsoap = require('../soap/soap-controller');

var api = express.Router();
api.post('/searchClient', servicesController.searchClient);
api.post('/searchQuotes1', servicesController.searchQuotes);
api.post('/searchQuotes', servicesControlsoap.searchQuotes);

module.exports = api;
