'use strict'

import * as express from 'express'

var servicesController = require('./services-controller');
var servicesControlsoap = require('../soap/soap-controller');

var api = express.Router();
api.post('/searchClient', servicesController.searchClient);
api.post('/searchQuotes', servicesController.searchQuotes); //Reservas dumming
api.post('/searchQuotes1', servicesControlsoap.searchQuotes); //Reservas SOAP Alemana
api.post('/searchIndicators', servicesControlsoap.searchIndicators); //Indicadores SOAP Alemana
api.get('/typeArancel', servicesController.typeArancel); //Reservas dumming
api.get('/codeConvenio', servicesController.codeConvenio); //Reservas dumming
api.get('/typeProduct', servicesController.typeProduct); //Reservas dumming
api.get('/convenio', servicesController.convenio); //searchVarReservas dumming
api.post('/searchXML', servicesController.searchXML);
api.get('/searchVar', servicesController.searchVar);

module.exports = api;
