var pg = require('pg');

const connectionData = {
    user: 'admision',
    host: 'stelios.trebolit.local',
    database: 'admision',
    password: 'admision',
    port: 5432,
};
const db_client = new pg.Client(connectionData);
db_client.connect();

module.exports = db_client;