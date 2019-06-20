var db_client = require('../pg');
import { searchClient, searchQuotes } from './services-models'

exports.searchClient = async (req: any, res: any) => {
    
    try {
        const result = await searchClient(req, res);
        res.send(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};

exports.searchQuotes = async (req: any, res: any) => {
    
    try {
        const result = await searchQuotes(req, res);
        res.send(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};