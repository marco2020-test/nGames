'use strict'

import * as dotenv from "dotenv";
import express from 'express'
var mongoose = require('mongoose');

dotenv.config();

const bodyParser = require('body-parser');
const cors = require('cors');
const server = express();

const urlMongo:string = process.env.URL_MONGO || 'localhost:27017';

const conn = mongoose.connect('mongodb://'+ urlMongo+ '/admision',{ useNewUrlParser: true })
    .then(() => console.log('Conectado a MongoDB!'))
    .catch((err:any) => console.error('Problemas!:', err));

// Routes
const listas_routes = require('./lists/lists-routes');
const client_routes = require('./client/client-routes');
const utils_routes = require('./utils/utils-routes');
const caching_routes = require('./caching/caching-routes');
const caja_routes = require('./caja/caja-routes');

var listOrigins = process.env.CORS_ALLOW_ORIGIN;
var corsOptions = {
    origin: listOrigins,
    methods: process.env.CORS_METHODS,
    allowedHeaders: process.env.CORS_ALLOWED_HEADERS,
    exposedHeaders: process.env.CORS_EXPOSED_HEADERS,
    credentials: process.env.CORS_CREDENTIALS,
    maxAge: process.env.CORS_MAX_AGE,
    preflightContinue: process.env.CORS_PRE_FLIGHT_CONTINUE,
    optionsSuccessStatus: process.env.CORS_OPTIONS_SUCCESS_STATUS
};
server.use(cors(corsOptions));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// activacion de Routers
if(process.env.PATH_API !== undefined) {
    server.use(process.env.PATH_API, listas_routes);
    server.use(process.env.PATH_API, client_routes);
    server.use(process.env.PATH_API, utils_routes);
    server.use(process.env.PATH_API, caching_routes);
    server.use(process.env.PATH_API, caja_routes);
}

const port = process.env.PORT || 3001;
server.listen(port, () => {
    console.log('El servidor está inicializado en el puerto: ' + port);
});
export default server;
