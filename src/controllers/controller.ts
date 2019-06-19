import { Request, Response, Router, response } from 'express'
import Cliente from '../models/clientModel'

var pg = require("pg")
var connectionString = "pg://admision:admision@stelios.trebolit.local:5432/admision";
var client = new pg.Client(connectionString);
 
client.connect((err: Error) => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
});
export function getList(req: Request, resp: Response) {
    var query = 'SELECT "ID_LIST", "DESCRIPTION" FROM public."listSelections"';
    client.query(query, (err: Error, res: Response) => {
        if (err) {
            console.error(err.stack)
        } else {
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

export function getClient(req: Request, res: Response) {
    const { documento } = req.body;
    const newPost = new Cliente({ documento });
    console.log(req.body.documento);
    var Request = require("request");

    Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3000/mock/searchClient",
        "body": JSON.stringify({
            "rut": req.body.documento
        })
    }, (error: Error, response: Response, body:JSON) => {
        if (error) {
            return console.dir(error);
        }
        res.send(body);
    });
}

export function getQuotes(req: Request, res: Response) {
    const { documento } = req.body;
    const newPost = new Cliente({ documento });
    console.log(req.body.documento);
    var Request = require("request");

    Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3000/mock/searchQuotes",
        "body": JSON.stringify({
            "In_Rut": req.body.documento, 
            "In_TipoIdentificacion":2, 
            "In_Holding":"1", 
            "In_Pasaporte":"", 
            "In_Ppn":"5305668"
        })
    }, (error: Error, response: Response, body:JSON) => {
        if (error) {
            return console.dir(error);
        }
        res.send(body);
    });
}