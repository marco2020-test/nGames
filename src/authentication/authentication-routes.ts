'use strict'

import * as express from 'express'

let servicesController = require('./authentication-controller');

let api = express.Router();
api.post('/login', servicesController.authenticationLogin); 
api.post('/register', servicesController.authenticationRegister); 
api.post('/me', servicesController.authenticationMe); 
api.post('/game', servicesController.authenticationGame); 

module.exports = api;
