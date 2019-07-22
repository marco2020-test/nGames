import * as pg from 'pg';
import {comboModels} from '../schemas/combos';
import * as dotenv from "dotenv";
const CachingEmpresa = require('../schemas/cachingEmpresa');

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
        console.log('getEmp ini');
        let atri = 'id=' + req.body.id + '&ded=' + req.body.ded;
        console.log('Atri: ' + atri);
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_EMP + atri,
        }, async  (error: Error, response: Response, body: string) => {
            if (error) {
                console.log('Ha ocurrido un error al recuperar las empresas desde el servicio, la informacion se extrae del caching');
                
                const empresasMongo = await getEmpresasMongo(res, req)

                return res.json(empresasMongo);
            }

            saveEmpresa(JSON.parse(body), req, res)
            
            return res.json(JSON.parse(body));
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
}

export function saveEmpresa(data: JSON, req: any, res: any) {
    try {
        console.log('ini saveEmpresaMongo');
        const data1 = JSON.stringify(data);
        const formato1N = JSON.parse(data1);
        const empresa = formato1N.admacSindicadoresResponse.admacSindicadoresResult

        for (const emp of empresa.voutCursors) {

            const datos = new CachingEmpresa({
                cljuIdclientejuridico: emp.cljuIdclientejuridico,
                cljuRazonsocial: emp.cljuRazonsocial
            });
    
            const result = datos.save();
        }

        console.log('end saveEmpresaMongo');

    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('Error en la petición');
    }
}


export async function getEmpresasMongo(res: any, req: any) {
    console.log('models getEmpresasMongo ini');

    return new Promise< {admacSindicadoresResponse : { admacSindicadoresResult : { voutCursors  : Empresa[]} }     } >((res, rej) => {
        return CachingEmpresa.find({})
            .then((empresas: (Empresa & {id : string} )[]) => {
                const emp : Empresa[] = empresas.map( (e : (Empresa & {id : string} )) =>
                                                                { return { cljuIdclientejuridico : e.cljuIdclientejuridico , cljuRazonsocial : e.cljuRazonsocial }      })
                const result :{admacSindicadoresResponse : { admacSindicadoresResult : { voutCursors  : Empresa[]} }     } = { 
                    "admacSindicadoresResponse": {
                        "admacSindicadoresResult": {
                            "voutCursors": emp
                        }
                      }
                  }
               return res(result )
            })
            .catch((err: any) => {
                console.log(err);
            });
    });
};

export interface AdmacSindicadoresResponse {
    admacSindicadoresResponse: {
        admacSindicadoresResult: {
            voutCursors: {
                cljuIdclientejuridico: number,
                cljuRazonsocial: string
            }
        }
    }
}

interface Empresa {
    cljuIdclientejuridico: number,
    cljuRazonsocial: string
}