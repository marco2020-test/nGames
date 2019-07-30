'use strict'

import * as express from 'express'

var listasController = require('./lists-controller');

var api = express.Router();
console.log('En el route nuevo');
api.get('/searchList', listasController.searchList);
api.get('/typeArancel', listasController.typeArancel); //Reservas dumming
api.get('/codeConvenio', listasController.codeConvenio); //Reservas dumming
api.get('/typeProduct', listasController.typeProduct); //Reservas dumming
api.get('/convenio', listasController.convenio); //searchVarReservas dumming
api.get('/searchPais', listasController.getPais);
api.get('/searchComuna', listasController.getComuna);
api.get('/searchFinan', listasController.getFinan);
api.post('/searchEmp', listasController.getEmp);
api.get('/getImedInfo', listasController.getImedInfo);
api.get('/tipoMoneda', listasController.tipoMoneda); //Data dumming


module.exports = api;
