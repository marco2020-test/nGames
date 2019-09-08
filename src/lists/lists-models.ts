import * as pg from 'pg';
import { comboModels } from '../schemas/combos';
import * as dotenv from "dotenv";
import { log } from 'util';
const CachingEmpresa = require('../schemas/caching-empresa');
var tools = require('lodash');


var db_client = require('../middlewares/pg');

export async function recuperarListas(req: any, res: any) {
    try {
        console.log('En el SQL')

        let query = 'SELECT "ID_LIST", "NAME_LIST","CODE", "DESCRIPTION" FROM public."listSelections"';

        console.log(query);

        const resp: pg.QueryResult = await db_client.query(query)
        let comboModels: comboModels[] = <(comboModels[])>resp.rows;

        res.send(comboModels);
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
}

export async function typeArancel(req: any, res: any) {

}

export async function codeConvenio(req: any, res: any) {

}

export async function typeProduct(req: any, res: any) {

}

export async function convenio(req: any, res: any) {

}
export async function getPais(req: any, res: any) {

}

export async function getComuna(req: any, res: any) {

}

export async function getFinan(req: any, res: any) {

}

export async function getEmp(req: any, res: any) {

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

    return new Promise<{ admacSindicadoresResponse: { admacSindicadoresResult: { voutCursors: Empresa[] } } }>((res, rej) => {
        return CachingEmpresa.find({})
            .then((empresas: (Empresa & { id: string })[]) => {
                const emp: Empresa[] = empresas.map((e: (Empresa & { id: string })) => { return { cljuIdclientejuridico: e.cljuIdclientejuridico, cljuRazonsocial: e.cljuRazonsocial } })
                const result: { admacSindicadoresResponse: { admacSindicadoresResult: { voutCursors: Empresa[] } } } = {
                    "admacSindicadoresResponse": {
                        "admacSindicadoresResult": {
                            "voutCursors": emp
                        }
                    }
                }
                return res(result)
            })
            .catch((err: any) => {
                console.log(err);
            });
    });
};


export async function recuperarUsuarioImed() {

    console.log('Ini Models.recuperarUsuarioImed');

    let estado = 'N';

    let query = `Select trim(value) as usuario
      FROM public.parameters
      WHERE key = 'usuario_imed'
      `;

    console.log(query);

    const result: pg.QueryResult = await db_client.query(query);

    let usuarioType: UsuarioImedType[] = <(UsuarioImedType[])>(result.rows.map((element) => {
        return {
            usuario: element.usuario
        }
    }));

    return usuarioType[0].usuario;
}


export async function recuperarContrasenaImed() {

    console.log('Ini Models.recuperarContrasenaImed');

    let query = `Select trim(value) as contrasena
      FROM public.parameters
      WHERE key = 'clave_imed'
      `;

    console.log(query);

    const result: pg.QueryResult = await db_client.query(query);

    let constrasenaType: ContrasenaImedType[] = <(ContrasenaImedType[])>(result.rows.map((element) => {
        return {
            contrasena: element.contrasena
        }
    }));

    return constrasenaType[0].contrasena;
}


export async function getImedInfo(req: any, res: any) {

    console.log('Ini Models.getImedInfo');

    return new Promise((res, rej) => {
        let usuario: string = '';
        let contrasena: string = '';

        const resultContrasena = recuperarContrasenaImed();
        const resultUsuario = recuperarUsuarioImed();

        resultContrasena.then((contrasenaString: string) => {

            contrasena = contrasenaString

            resultUsuario.then((usuarioString: string) => {

                usuario = usuarioString


                const result: {} = {
                    "iMed": {
                        "usuarioImed": usuario,
                        "contrasenaImed": contrasena
                    }
                }
                return res(result)
            })
        })
    });
}

export async function tipoMoneda(req: any, res: any) {

}



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

interface Imed {
    usuario: string,
    constrasena: string
}

interface ContrasenaImedType {
    contrasena: string,
}

interface UsuarioImedType {
    usuario: string,
}
