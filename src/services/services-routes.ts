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
api.post('/updateClient', servicesController.updateClient);//actualizacion de datos de contacto
api.post('/updatePrevision', servicesController.updatePrevision);//actualizacion de datos de prevision
api.get('/searchPais', servicesController.getPais);
api.get('/searchComuna', servicesController.getComuna);
api.get('/searchFinan', servicesController.getFinan);
api.post('/searchEmp', servicesController.getEmp);
api.post('/searchBono', servicesController.getBono);
api.post('/searchBonC', servicesController.getBonoC);
module.exports = api;
