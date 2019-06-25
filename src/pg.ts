var pg = require('pg');
console.log('User '+process.env.BD_USER);
const connectionData = {
    user: process.env.BD_USER,
    host: process.env.BD_HOST,
    database: process.env.BD_NOMBRE,
    password: process.env.BD_PASSWORD,
    port: process.env.BD_PORT
};
const db_client = new pg.Client(connectionData);
db_client.connect();

module.exports = db_client;