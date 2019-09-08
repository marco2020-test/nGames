import * as pg from 'pg';
import { comboModels } from '../schemas/combos';
import * as dotenv from "dotenv";
import { log } from 'util';
import { resolveCname } from 'dns';
const bitacoraValorizacion = require('../schemas/bitacora-valorizacion');
var tools = require('lodash');

var db_client = require('../middlewares/pg');
var ip = require('ip');
let ipEquipo=ip.address();
export async function reAbrirTurnoCaja(req: any, res: any) {

};


export async function abrirTurnoCaja(req: any, res: any) {

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
};