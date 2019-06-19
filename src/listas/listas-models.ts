import * as pg from 'pg';
var db_client = require('../pg');

export async function recuperarListas(req: any, res: any) {
    try {
        console.log('En el SQL')

        let query = 'SELECT "ID_LIST", "DESCRIPTION" FROM public."listSelections"';

        console.log(query);

        const resp: pg.QueryResult = await db_client.query(query)
        console.log('End Models.cjaRecuperarTraspasoResumen resp count:' + resp.rowCount)

        return <(ListasModel[])>resp.rows
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.status(500).send('Error en la petición');
    }
}

export interface ListasModel {

    ID_LIST: string
    DESCRIPTION: string
  }