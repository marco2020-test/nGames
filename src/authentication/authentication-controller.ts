import * as models from './authentication-models'
import { ClienteVOResponse } from '../juegos/juego-models'

exports.authenticationLogin = async (req: any, res: any) => {
    console.log('llegue a controller')
    try {
        const result = await models.authenticationLogin(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }
};

exports.authenticationRegister = async (req: any, res: any) => {
    console.log('llegue a controller')
    try {
        const result = await models.authenticationRegister(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }
};

exports.authenticationMe = async (req: any, res: any) => {
    console.log('llegue a controller')
    try {
        const result = await models.authenticationMe(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }
};

exports.authenticationGame = async (req: any, res: any) => {
    console.log('llegue a controller')
    try {
        const result = await models.authenticationGame(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }
};