import *  as models from './caja-models'

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
