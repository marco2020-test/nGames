'use strict'

import * as express from 'express'

var cajaController = require('./caja-controller');

var api = express.Router();
console.log('Caja En el route nuevo');

api.post('/reAbrirTurnoCaja', cajaController.reAbrirTurnoCaja);
api.post('/abrirTurnoCaja', cajaController.abrirTurnoCaja);
api.post('/saveBitacoraValorizacion', cajaController.saveBitacoraValorizacion);
api.get('/getProcedencia', cajaController.getProcedencia);
api.get('/getTipoAtencion', cajaController.getTipoAtencion);

module.exports = api;
