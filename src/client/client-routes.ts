'use strict'

import * as express from 'express'

let servicesController = require('./client-controller');

let api = express.Router();
api.post('/searchClient1', servicesController.searchClient1); // clientes dumming
api.post('/searchClient', servicesController.searchClient); 
api.post('/searchQuotes', servicesController.searchQuotes); // Reservas dumming
api.post('/updateClient', servicesController.updateClient);// actualizacion de datos de contacto
api.post('/updatePrevision', servicesController.updatePrevision);// actualizacion de datos de prevision
api.post('/searchBono', servicesController.getBono);
api.post('/getToken', servicesController.getToken);
api.post('/searchCalugas', servicesController.getCalugas);
api.post('/saveClienteMongo', servicesController.saveClienteMongo);
api.get('/searchClienteMongo', servicesController.searchClienteMongo);
module.exports = api;
