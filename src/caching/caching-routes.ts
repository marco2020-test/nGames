'use strict'

import * as express from 'express'

let servicesController = require('./caching-controllers');

let api = express.Router();
api.post('/cachingClient', servicesController.cachingClient);
module.exports = api;
