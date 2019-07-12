'use strict'

import * as express from 'express'

var utilsController = require('./utils-controller');

var api = express.Router();
api.post('/searchXML', utilsController.searchXML);
api.get('/searchVar', utilsController.searchVar);
api.post('/searchBonC', utilsController.getBonoC);
api.post('/searchQuotes1', utilsController.searchQuotes); //Reservas SOAP Alemana
api.post('/searchIndicators', utilsController.searchIndicators); //Indicadores SOAP Alemana
module.exports = api;
