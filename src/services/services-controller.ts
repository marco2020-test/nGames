var db_client = require('../pg');
import * as models from './services-models'

exports.searchClient = async (req: any, res: any) => {
    
    try {
        const result = await models.searchClient(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }

};

exports.searchQuotes = async (req: any, res: any) => {
    
    try {
        const result = await models.searchQuotes(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }

};

exports.typeArancel = async (req: any, res: any) => {
    
    try {
        const result = await models.typeArancel(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }

};

exports.codeConvenio = async (req: any, res: any) => {
    
    try {
        const result = await models.codeConvenio(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }

};

exports.typeProduct = async (req: any, res: any) => {
    
    try {
        const result = await models.typeProduct(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }

};

exports.convenio = async (req: any, res: any) => {
    
    try {
        const result = await models.convenio(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }

};

exports.searchXML = async (req: any, res: any) => {
    
    try {
        const result = await models.searchXML(req, res);
        console.log(' en result'+ result);
        return (result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }

};

exports.searchVar = async (req: any, res: any) => {
    
    try {
        const result = await models.searchVar(req, res);
        res.send(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};
exports.updateClient = async (req: any, res: any) => {
    
    try {
        const result = await models.updateClient(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};

exports.updatePrevision = async (req: any, res: any) => {
    
    try {
        const result = await models.updatePrevision(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};

exports.getPais = async (req: any, res: any) => {
    
    try {
        const result = await models.getPais(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};

exports.getComuna = async (req: any, res: any) => {
    
    try {
        const result = await models.getComuna(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};

exports.getFinan = async (req: any, res: any) => {
    
    try {
        const result = await models.getFinan(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};

exports.getEmp = async (req: any, res: any) => {
    
    try {
        const result = await models.getEmp(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};

exports.getBono = async (req: any, res: any) => {
    
    try {
        const result = await models.getBono(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};


exports.getBonoC = async (req: any, res: any) => {
    
    try {
        const result = await models.getBonoC(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};
