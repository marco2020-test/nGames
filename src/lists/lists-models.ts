import * as pg from 'pg';
import {comboModels} from '../schemas/combos';
import * as dotenv from "dotenv";
// dotenv.config();

let Request = require('request');
var db_client = require('../middlewares/pg');

export async function recuperarListas(req: any, res: any) {
    try {
        console.log('En el SQL')
        
        let query = 'SELECT "ID_LIST", "DESCRIPTION" FROM public."listSelections"';

        console.log(query);

        const resp: pg.QueryResult = await db_client.query(query)
        console.log('Respuesta:' + resp.rowCount)

        return <(comboModels[])>resp.rows;
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
}

export async function typeArancel(req: any, res: any) {
    try {
        console.log('Tipo Arancel nuevo: ');
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_ARANCEL,
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            console.log(body);
            return res.send(JSON.parse(body));
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
}

export async function codeConvenio(req: any, res: any) {
    try {
        console.log('Codigo Convenio nuevo: ');
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_TYPE_CONV,
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            console.log(body);
            return res.send(JSON.parse(body));
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
}

export async function typeProduct(req: any, res: any) {
    try {
        console.log('Tipo de producto nuevo: ');
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_TYPE_PROD,
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            console.log(body);
            return res.json(JSON.parse(body));
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
}

export async function convenio(req: any, res: any) {
    try {
        console.log('Tipo de producto nuevo: ');
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_CONVENIO,
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            console.log(body);
            return res.json(JSON.parse(body));
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
}
export async function getPais(req: any, res: any) {
    try {
        console.log('Paises nuevo: ');
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_PAIS,
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            console.log(body);
            return res.json(JSON.parse(body));
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
}

export async function getComuna(req: any, res: any) {
    try {
        console.log('Comunas nuevo: ');
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_COMUNA,
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            console.log(body);
            return res.json(JSON.parse(body));
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
}

export async function getFinan(req: any, res: any) {
    try {
        console.log('Financiadoras nuevo: ');
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_FINAN,
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            console.log(body);
            return res.json(JSON.parse(body));
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
}

export async function getEmp(req: any, res: any) {
    try {
        console.log('Empresas nuevo: ');
        let atri = 'id=' + req.body.id + '&ded=' + req.body.ded;
        console.log('Atri: ' + atri);
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_EMP + atri,
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            console.log(body);
            return res.json(JSON.parse(body));
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
}

