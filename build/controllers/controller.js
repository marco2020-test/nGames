"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientModel_1 = __importDefault(require("../models/clientModel"));
var pg = require("pg");
var connectionString = "pg://admision:admision@stelios.trebolit.local:5432/admision";
var client = new pg.Client(connectionString);
client.connect((err) => {
    if (err) {
        console.error('connection error', err.stack);
    }
    else {
        console.log('connected');
    }
});
function getList(req, resp) {
    var query = 'SELECT "ID_LIST", "DESCRIPTION" FROM public."listSelections"';
    client.query(query, (err, res) => {
        if (err) {
            console.error(err.stack);
        }
        else {
            var formato = JSON.stringify(res);
            var formatoN = JSON.parse(formato);
            console.log(formatoN);
            for (var i = 0; i < formatoN['rows'].length; i++) {
                console.log("El valor es " + formatoN['rows'][i].DESCRIPTION);
            }
            resp.json({ formatoN });
        }
    });
}
exports.getList = getList;
function getClient(req, res) {
    const { documento } = req.body;
    const newPost = new clientModel_1.default({ documento });
    console.log(req.body.documento);
    var Request = require("request");
    Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3000/mock/searchClient",
        "body": JSON.stringify({
            "rut": req.body.documento
        })
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        res.send(body);
    });
}
exports.getClient = getClient;
function getQuotes(req, res) {
    const { documento } = req.body;
    const newPost = new clientModel_1.default({ documento });
    console.log(req.body.documento);
    var Request = require("request");
    Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3000/mock/searchQuotes",
        "body": JSON.stringify({
            "In_Rut": req.body.documento,
            "In_TipoIdentificacion": 2,
            "In_Holding": "1",
            "In_Pasaporte": "",
            "In_Ppn": "5305668"
        })
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        res.send(body);
    });
}
exports.getQuotes = getQuotes;
