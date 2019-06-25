'use strict'

import * as express from 'express'

var servicesController = require('./services-controller');
var servicesControlsoap = require('../soap/soap-controller');

var api = express.Router();
api.post('/searchClient', servicesController.searchClient);
api.post('/searchQuotes', servicesController.searchQuotes); //Reservas dumming
api.post('/searchQuotes1', servicesControlsoap.searchQuotes); //Reservas SOAP Alemana

module.exports = api;