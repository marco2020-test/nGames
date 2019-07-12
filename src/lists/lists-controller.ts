import *  as models from './lists-models'

exports.searchList = async (req: any, res: any) => {
    console.log('En el controler nuevo');
    try {
        const result = await models.recuperarListas(req, res)
        return res.status(200).send(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.status(500).send('Error en la petición');
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