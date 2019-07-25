'use strict'

import * as express from 'express'

var cajaController = require('./caja-controller');

var api = express.Router();
console.log('Caja En el route nuevo');

api.get('/reAbrirTurnoCaja', cajaController.reAbrirTurnoCaja);
api.post('/abrirTurnoCaja', cajaController.abrirTurnoCaja);
api.post('/saveBitacoraValorizacion', cajaController.saveBitacoraValorizacion);

module.exports = api;
