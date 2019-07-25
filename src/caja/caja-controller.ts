import *  as models from './caja-models'
import { comboCajaModels } from '../schemas/combos';

exports.reAbrirTurnoCaja = async (req: any, res: any) => {

    try {
        let result = await models.reAbrirTurnoCaja(req, res);
        
        return result;

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }

};


exports.abrirTurnoCaja = async (req: any, res: any) => {

    try {
        let result = await models.abrirTurnoCaja(req, res);
        
        return result;

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }

};

exports.saveBitacoraValorizacion = async (req: any, res: any) => {

    try {
        let result = await models.saveBitacoraValorizacion(req, res);
        
        return res.send("ok");

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
};


exports.getProcedencia = async (req: any, res: any) => {
    console.log('Controller getProcedencia');
    try {
        let result = await models.getProcedencia(req, res);
        return result;

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }

};

exports.getTipoAtencion = async (req: any, res: any) => {
    console.log('Controller getTipoAtencion');
    try {
        let result = await models.getTipoAtencion(req, res);
        return result;

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }

};