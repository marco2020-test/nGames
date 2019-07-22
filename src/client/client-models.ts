const CachingCliente = require('../schemas/cachingCliente');
import { xml2json } from 'xml-js';
let Request = require('request');
let codSuper = '';
let codTok = '';

let infoClient = {};
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';

export async function searchClient1(req: any, res: any) {
    try {
        console.log('Metodo viejo: ' + req.body.documento);
        Request.post({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_CLIENTE,
            "body": JSON.stringify({
                "documento": req.body.documento
            })
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            console.log(body);
            res.json(JSON.parse(body));
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('Error en la petición');
    }
}

export async function searchQuotes(req: any, res: any) {
    try {
        console.log('Metodo viejo: ' + req.body.inRut);
        console.log("url:" + process.env.PATH_RESERVAS + req.body.inRut + "&holding=2&identificacion=1");
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_RESERVAS + req.body.inRut + "&holding=2&identificacion=1",
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                console.log('Error en el BUS:' + error);
                return res.send('Error en la petición');
            }
            console.log(body);
            res.json(JSON.parse(body));
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('Error en la petición');
    }
}

export async function updateClient(req: any, res: any) {
    try {
        console.log('updateClient: ' + JSON.stringify(req.body));
        Request.post({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_UPDATECLIENT,
            "body": JSON.stringify({
                'idclientenatural': req.body.idclientenatural,
                'idclasificacion': req.body.idclasificacion,
                'flagDireccion': req.body.flagDireccion,
                'direccion': req.body.direccion,
                'idpais': req.body.idpais,
                'idcomuna': req.body.idcomuna,
                'idciudad': req.body.idciudad,
                'nombreciudad': req.body.nombreciudad,
                'flagCorreo': req.body.flagCorreo,
                'correo': req.body.correo,
                'flagFono': req.body.flagFono,
                'fono': req.body.fono,
                'flagCelular': req.body.flagCelular,
                'celular': req.body.celular,
                'idempresa': req.body.idempresa,
                'idmaestrovirtual': req.body.idmaestrovirtual,
                'usuario': req.body.usuario,
                'servicio': req.body.servicio,
                'sistema': req.body.sistema,
                'sucursal': req.body.sucursal,
                'ippcusuario': req.body.ippcusuario,
                'nombrepcusuario': req.body.nombrepcusuario,
                'tipologin': req.body.tipologin
            })
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
        return res.send('Error en la petición');
    }
}

export async function updatePrevision(req: any, res: any) {
    try {
        console.log('updateClient: ' + JSON.stringify(req.body));
        Request.post({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_UPDATEPRE,
            "body": JSON.stringify({
                'idclientenatural': req.body.idclientenatural,
                "idactividad": "",
                "idestadocivil": "",
                "idetnia": "",
                "idsexo": "",
                'idprevision': req.body.idprevision,
                'idtipoidentificacion': req.body.idtipoidentificacion,
                'maestrovirtual': req.body.idmaestrovirtual,
                'usuario': req.body.usuario,
                'servicio': req.body.servicio,
                'sistema': req.body.sistema,
                'sucursal': req.body.sucursal,
                'ippcusuario': req.body.ippcusuario,
                'nombrepcusuario': req.body.nombrepcusuario,
                'tipologin': req.body.tipologin
            })
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
        return res.send('Error en la petición');
    }
}

export async function getBono(req: any, res: any) {
    try {
        console.log('Empresas: ');
        let atri = 'Usuario=' + req.body.usuario + '&Clave=' + req.body.clave + '&RutConvenio=' + req.body.rut
            + '&CodFinanciador=' + req.body.codigo + '&FolioBono=' + req.body.bono;
        console.log('Atri: ' + atri);
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_BONO + atri,
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            console.log(body);
            res.json(JSON.parse(body));
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('Error en la petición');
    }
}

export async function getBonoC(req: any, res: any) {
    try {
        console.log('Empresas: ');
        prevision(req.body.idIsapre).then((data) => {
            Request.get({
                "headers": { "content-type": "application/json" },
                "url": process.env.PATH_BONO_C + 'idIsapre=' + codSuper + '&idBono=' + req.body.idBono,
            }, (error: Error, response: Response, body: string) => {
                if (error) {
                    return console.dir(error);
                }
                console.log(process.env.PATH_BONO_C + 'idIsapre=' + codSuper + '&idBono=' + req.body.idBono);
                console.log(body);
                res.json(JSON.parse(body));
            })
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('Error en la petición');
    }
}

export async function prevision(req: string) {
    return new Promise((res, rej) => {
        return Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.MOCK_PREVISION,
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            console.log(body);
            let dataCur = JSON.parse(body);

            for (const reser of dataCur.data) {
                console.log('Validando' + reser.ID_PREVISION + ' ' + req);
                if (req === reser.ID_PREVISION) {
                    codSuper = reser.SUPERINTENDENCIA;
                    console.log('siii: ' + codSuper);
                }
            }
            res();
        });
    });
}

export async function searchClient(req: any, res: any) {
    try {
        console.log('Cliente: ' + req.body.documento);
        getToken().then((data) => {
            // codTok='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFqTkdSVUUyT1VWRU1UQTJSVGt3TmpBd09EWTRNelE0UVRoRU1FSkVOVGd5T1RaQ1JFRXdRZyJ9.eyJpc3MiOiJodHRwczovL2FsZW1hbmEtcG9jLmF1dGgwLmNvbS8iLCJzdWIiOiJWNzdSYkFNNzAzWlloWHMxc1dLemNuUmg2QjlGWEttTUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9tLmFsZW1hbmEuY2wvc3J2IiwiaWF0IjoxNTYyOTQxOTQxLCJleHAiOjE1NjMwMjgzNDEsImF6cCI6IlY3N1JiQU03MDNaWWhYczFzV0t6Y25SaDZCOUZYS21NIiwic2NvcGUiOiJyZWFkOmdyb3VwcyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.7QEb8jAymtRXqyO9jL90Wnqaq3K3msipZXsOqOH3G5c9SlU-BwR56KSYD3MKeiCr5oLsI0Wz8gVmrAQeg79FVlUbbp_8n5-99nos_3e4QjhG7apJRNcqywBM-jZZ4-o3wn5aAed50vn_D8R5X8SWAKXkfnrwkeg6iCenhDMZgNVkdm7TehHFJXe7Pq0nEsd64DzCP5RRDhmvSCe0GovPx9U4x7BrzxNnCuSMXtU4YVZbeKere1VQLA8b-8AakokiyXrHoAgEV5AH0GABqpM7i_lnI_OjJQrZ47m0mBismrygmYcAFG9-Ob8qjCYEF51Kjiigqo4Z8SK5ByFI4giJNQ';
            Request.get({
                "headers": {
                    "content-type": "application/json",
                    "Authorization": "Bearer " + codTok
                },
                "url": process.env.PATH_CLIENTE1 + req.body.documento,
            }, (error: Error, response: Response, body: string) => {
                if (error) {
                    return console.dir(error);
                } else {
                    console.log('Aqui' + body);
                    if (body === 'Not Found') {
                        console.log('Not Found');
                        return res.send('Not Found');
                    } else {
                        console.log('El token: ' + "Bearer " + codTok);
                        res.json(JSON.parse(body));
                    }
                }
            });
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('Error en la petición');
    }
}

export async function getToken() {
    return new Promise((res, rej) => {
        return Request.post({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_TOKEN,
            "body": JSON.stringify({
                'client_id': 'V77RbAM703ZYhXs1sWKzcnRh6B9FXKmM',
                'client_secret': 'O2R65nx_-V_8sO9aUAIhJIsiy8maR2HyX0UxgcOBhG8LKdLRCEyaUhAnj6ZlWxsj',
                'audience': 'https://m.alemana.cl/srv',
                'grant_type': 'client_credentials'
            })
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            console.log(body);
            codTok = (JSON.parse(body)).access_token;
            console.log('token: ' + codTok);
            res();
        });
    });
}

export async function getCalugas(req: any, res: any) {
    try {
        console.log('Calugas');
        Request.post({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_CALUGAS + req.body.ppn,
            "body": JSON.stringify({
                "idcliente": req.body.idcliente,
                "nombre": req.body.nombre,
                "valor": req.body.valor,
                "idOwner": req.body.idOwner,
                "idWidget": req.body.idWidget
            })
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            let xml = (JSON.parse(body)).buildXmlOfCalugasResponse.xmlCalugas;
            console.log('el xml ' + xml);
            if (xml.length > 20) {
                //xml = xml.replace(/nat:/g, "");
                const rawResponse = JSON.parse(xml2json(xml, { compact: true, spaces: 4 }));
                const response = rawResponse["indicadores"];

                if (response["indicador"]) {
                    if (response["indicador"][0]) {
                        var data = [];
                        var data1;
                        let glosa = '';
                        let imag = '';
                        for (var i = 0; i < response["indicador"].length; i++) {
                            if (response['indicador'][i]['glosa']["_text"] === undefined) {
                                glosa = '';
                            } else {
                                glosa = response['indicador'][i]['glosa']["_text"];
                            }
                            if (response['indicador'][i]['imagen']["_text"] === undefined) {
                                imag = '';
                            } else {
                                imag = response['indicador'][i]['imagen']["_text"];
                            }
                            data1 = {
                                "glosa": glosa,
                                "imagen": imag
                            };
                            data[i] = data1;
                        };
                        console.log(data);
                    }
                }
            }
            console.log(body);
            return res.status(200).send({ data });
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('Error en la petición');
    }
}


export function saveClienteMongo(clienteVOResponse: ClienteVOResponse, req: any, res: any) {
    try {
        console.log('ini saveClienteMongo');

        function save() {
            console.log('ini saveClienteMongo clienteVOResponse.CLNU_IDCLIENTENATURAL:'+clienteVOResponse.clienteVOResponse.CLNU_IDCLIENTENATURAL);
            
            console.log('ini saveClienteMongo clienteVOResponse.CLNU_TIPOIDENTIFICACION:'+clienteVOResponse.clienteVOResponse.CLNU_TIPOIDENTIFICACION);
            const datos = new CachingCliente({
                CLNU_IDCLIENTENATURAL: clienteVOResponse.clienteVOResponse.CLNU_IDCLIENTENATURAL,
                CLNU_TIPOIDENTIFICACION:  clienteVOResponse.clienteVOResponse.CLNU_TIPOIDENTIFICACION,
                CLVA_NUMIDENTIFICACION:  clienteVOResponse.clienteVOResponse.CLVA_NUMIDENTIFICACION,
                CLVA_DVIDENTIFICACION:  clienteVOResponse.clienteVOResponse.CLVA_DVIDENTIFICACION,
                CLVA_NOMBRES:  clienteVOResponse.clienteVOResponse.CLVA_NOMBRES,
                CLVA_APEPATERNO:  clienteVOResponse.clienteVOResponse.CLVA_APEPATERNO,
                CLVA_APEMATERNO:  clienteVOResponse.clienteVOResponse.CLVA_APEMATERNO,
                CLDA_FECHANACIMIENTO:  clienteVOResponse.clienteVOResponse.CLDA_FECHANACIMIENTO,
                CLVA_SEXO:  clienteVOResponse.clienteVOResponse.CLVA_SEXO,
                CLVA_ESTADO_CIVIL:  clienteVOResponse.clienteVOResponse.CLVA_ESTADO_CIVIL,
                CLVA_ETNIA:  clienteVOResponse.clienteVOResponse.CLVA_ETNIA,
                CLVA_ACTIVIDAD:  clienteVOResponse.clienteVOResponse.CLVA_ACTIVIDAD,
                CLVA_DIRECCION:  clienteVOResponse.clienteVOResponse.CLVA_DIRECCION,
                CLVA_NOMBRE_PAIS:  clienteVOResponse.clienteVOResponse.CLVA_NOMBRE_PAIS,
                CLVA_NOMBRE_REGION:  clienteVOResponse.clienteVOResponse.CLVA_NOMBRE_REGION,
                CLVA_TELEFONO_FIJO:  clienteVOResponse.clienteVOResponse.CLVA_TELEFONO_FIJO,
                CLVA_CODIGO_COMUNA:  clienteVOResponse.clienteVOResponse.CLVA_CODIGO_COMUNA,
                CLVA_COD_PREVISION:  clienteVOResponse.clienteVOResponse.CLVA_COD_PREVISION,
                CLVA_ID_PAIS:  clienteVOResponse.clienteVOResponse.CLVA_ID_PAIS,
                created: ""
            });
            const result = datos.save();
            console.log('end saveClienteMongo');
            //res.send({ data: result })
        }
    save();
    
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('Error en la petición');
    }
}

export async function searchClienteMongo( ppnCliente:any) {
    console.log('models searchClienteMongo ini ppnCliente:'+ppnCliente);

    return new Promise((res, rej) => {
    CachingCliente.findOne({ CLNU_IDCLIENTENATURAL: ppnCliente })
      .then((cliente: any) => {
        console.log('models searchClienteMongo cliente:'+cliente);
        res(cliente)
      })
      .catch((err: any) => {
        console.log(err);
      });
});
}

export async function searchClient3(req: any, res: any) {
    try {
        console.log('Cliente: ' + req.body.documento);
         // codTok='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFqTkdSVUUyT1VWRU1UQTJSVGt3TmpBd09EWTRNelE0UVRoRU1FSkVOVGd5T1RaQ1JFRXdRZyJ9.eyJpc3MiOiJodHRwczovL2FsZW1hbmEtcG9jLmF1dGgwLmNvbS8iLCJzdWIiOiJWNzdSYkFNNzAzWlloWHMxc1dLemNuUmg2QjlGWEttTUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9tLmFsZW1hbmEuY2wvc3J2IiwiaWF0IjoxNTYyOTQxOTQxLCJleHAiOjE1NjMwMjgzNDEsImF6cCI6IlY3N1JiQU03MDNaWWhYczFzV0t6Y25SaDZCOUZYS21NIiwic2NvcGUiOiJyZWFkOmdyb3VwcyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.7QEb8jAymtRXqyO9jL90Wnqaq3K3msipZXsOqOH3G5c9SlU-BwR56KSYD3MKeiCr5oLsI0Wz8gVmrAQeg79FVlUbbp_8n5-99nos_3e4QjhG7apJRNcqywBM-jZZ4-o3wn5aAed50vn_D8R5X8SWAKXkfnrwkeg6iCenhDMZgNVkdm7TehHFJXe7Pq0nEsd64DzCP5RRDhmvSCe0GovPx9U4x7BrzxNnCuSMXtU4YVZbeKere1VQLA8b-8AakokiyXrHoAgEV5AH0GABqpM7i_lnI_OjJQrZ47m0mBismrygmYcAFG9-Ob8qjCYEF51Kjiigqo4Z8SK5ByFI4giJNQ';
        return new Promise((res, rej) => {
            getToken().then((data) => {
                Request.get({
                    "headers": {
                        "content-type": "application/json",
                        "Authorization": "Bearer " + codTok
                    },
                    "url": process.env.PATH_CLIENTE1 + req.body.documento,
                }, (error: Error, response: Response, body: string) => {
                    if (error) {
                        console.log('Error en el servicio de serachClient3');
                        
                        return res(error);
                    } else {
                        console.log('Aqui' + body);
                        if (body === 'Not Found') {
                            console.log('Not Found');
                            res('Not Found');
                        } else {
                            console.log('El token: ' + "Bearer " + codTok);
                            res(JSON.parse(body));
                        }
                    }
                });
            });
        });
    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('Error en la petición');
    }
 }

export interface ClienteVOResponse {
    clienteVOResponse:{
        CLNU_IDCLIENTENATURAL: number,
        CLNU_TIPOIDENTIFICACION: number,
        CLVA_NUMIDENTIFICACION:  string,
        CLVA_DVIDENTIFICACION:  string,
        CLVA_NOMBRES?:  string,
        CLVA_APEPATERNO?: string,
        CLVA_APEMATERNO?:  string,
        CLDA_FECHANACIMIENTO?:  string,
        CLVA_SEXO?:  string,
        CLVA_ESTADO_CIVIL?:  string,
        CLVA_ETNIA?:  string,
        CLVA_ACTIVIDAD?:  string,
        CLVA_DIRECCION?:  string,
        CLVA_NOMBRE_PAIS?:  string,
        CLVA_NOMBRE_REGION?:  string,
        CLVA_TELEFONO_FIJO?:  string,
        CLVA_CODIGO_COMUNA?:  string,
        CLVA_COD_PREVISION?:  string,
        CLVA_ID_PAIS?:  string,
        created?: string
    },
    OUT_COD?: number,
    OUT_MSG?: string
}

export interface ClienteVOResponseMesaje {
    OUT_COD?: number,
    OUT_MSG?: string
}