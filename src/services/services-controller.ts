var db_client = require('../pg');
import { searchClient, searchQuotes, typeArancel, codeConvenio, typeProduct, convenio, searchXML, searchVar } from './services-models'

exports.searchClient = async (req: any, res: any) => {
    
    try {
        const result = await searchClient(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }

};

exports.searchQuotes = async (req: any, res: any) => {
    
    try {
        const result = await searchQuotes(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }

};

exports.typeArancel = async (req: any, res: any) => {
    
    try {
        const result = await typeArancel(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }

};

exports.codeConvenio = async (req: any, res: any) => {
    
    try {
        const result = await codeConvenio(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }

};

exports.typeProduct = async (req: any, res: any) => {
    
    try {
        const result = await typeProduct(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }

};

exports.convenio = async (req: any, res: any) => {
    
    try {
        const result = await convenio(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }

};

exports.searchXML = async (req: any, res: any) => {
    
    try {
        const result = await searchXML(req, res);
        res.send(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};

exports.searchVar = async (req: any, res: any) => {
    
    try {
        const result = await searchVar(req, res);
        res.send(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};