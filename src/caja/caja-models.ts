import * as pg from 'pg';
import { comboModels } from '../schemas/combos';
import * as dotenv from "dotenv";
import { log } from 'util';
const bitacoraValorizacion = require('../schemas/bitacoraValorizacion');
var tools = require('lodash');


let Request = require('request');
var db_client = require('../middlewares/pg');

export async function reAbrirTurnoCaja(req: any, res: any) {
    try {
        console.log('Ini ReAbrir turno Caja');
        let atri = 'userCod=' + req.body.userCod + '&ipTerm=' + req.body.ipTerm;

        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_REABRIR_TURNO_CAJA + atri,
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            console.log(body);
            return res.send(JSON.parse(body));
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
};


export async function abrirTurnoCaja(req: any, res: any) {
    try {
        console.log('Ini abrir turno Caja');
        let atri = 'userCod=' + req.body.userCod + '&ipTerm=' + req.body.ipTerm + '&cantidadClp=' + req.body.cantidadClp
            + '&tasaClp=' + req.body.tasaClp + '&cantidadUsd=' + req.body.cantidadUsd + '&cantidadUsd=' + req.body.cantidadUsd;
        + '&tasaUsd=' + req.body.tasaUsd + '&cantidadEur=' + req.body.cantidadEur + '&tasaEur=' + req.body.tasaEur;

        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_ABRIR_TURNO_CAJA + atri,
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            console.log(body);
            return res.send(JSON.parse(body));
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
};


export function saveBitacoraValorizacion(req: any, res: any) {
    try {
        console.log('ini saveBitacoraValorizacion');

        function save() {


            const datos = new bitacoraValorizacion({
                usuario: req.body.usuario,
                numeroAtencion: req.body.numeroAtencion,
                valorIsapre: req.body.valorIsapre,
                valorBonificacion: req.body.valorBonificacion,
                valorSeguro: req.body.valorSeguro
            });
            const result = datos.save();
            console.log('end saveBitacoraValorizacion');
        }
        save();

    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('Error en la petición');
    }
}