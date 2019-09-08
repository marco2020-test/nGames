'use strict'

//import * as dotenv from "dotenv";
import express from 'express'
var mongoose = require('mongoose');
(require('dotenv').config({ silent: process.env.NODE_ENV === 'production' }))


//dotenv.config();

const bodyParser = require('body-parser');
const cors = require('cors');
const server = express()

//const urlConnectionMongo:string = process.env.URL_DB_MONGO || 'mongodb://localhost:27017/auth1';
const urlConnectionMongo:string = process.env.URL_DB_MONGO || 'mongodb+srv://mm:hola@cluster0-bhqdd.mongodb.net/test?retryWrites=true&w=majority';
                                                               


console.log("urlConnectionMongo: " + urlConnectionMongo);

const conn = mongoose.connect(urlConnectionMongo,{ useNewUrlParser: true })
    .then(() => console.log('Conectado a MongoDB!'))
    .catch((err:any) => console.error('Problemas!:', err));

// Routes
 const juegos_routes = require('./juegos/juego-routes');
 const authentication_routes = require('./authentication/authentication-routes');
// const listas_routes = require('./lists/lists-routes');
// const client_routes = require('./client/client-routes');
// const utils_routes = require('./utils/utils-routes');
// const caching_routes = require('./caching/caching-routes');
// const caja_routes = require('./caja/caja-routes');

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
console.log('marco=',)
if(process.env.PATH_API !== undefined) {
    server.use(process.env.PATH_API, juegos_routes);
    server.use(process.env.PATH_API, authentication_routes);
    //server.use('/api/v1', enrutador);    
    // server.use(process.env.PATH_API, listas_routes);
    // server.use(process.env.PATH_API, client_routes);
    // server.use(process.env.PATH_API, utils_routes);
    // server.use(process.env.PATH_API, caching_routes);
    // server.use(process.env.PATH_API, caja_routes);
}

const port = process.env.PORT || 3001;
server.listen(port, () => {
    console.log('El servidor está inicializado en el puerto: ' + port);
});
export default server;
