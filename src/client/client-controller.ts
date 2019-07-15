import * as models from './client-models'

exports.searchClient1 = async (req: any, res: any) => {
    
    try {
        const result = await models.searchClient1(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return('Error en la petición');
    }

};

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

exports.getBono = async (req: any, res: any) => {
    
    try {
        const result = await models.getBono(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};

 exports.getToken = async (req: any, res: any) => {
    
    try {
        const result = await models.getToken();
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};

exports.getCalugas = async (req: any, res: any) => {
    
    try {
        const result = await models.getCalugas(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};

