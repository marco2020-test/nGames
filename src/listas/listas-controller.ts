var db_client = require('../pg');
import { recuperarListas, ListasModel } from './listas-models'

exports.searchList = async (req: any, res: any) => {
    console.log('En el controler nuevo');
    try {
        const result = await recuperarListas(req, res)
        return res.status(200).send(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.status(500).send('Error en la petición');
    }

};