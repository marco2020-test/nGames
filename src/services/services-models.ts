import { xml2json } from 'xml-js'
var Request = require('request');

let infoClient = {};

export async function searchClient(req: any, res: any) {
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
        process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_RESERVAS + req.body.inRut + "&holding=2&identificacion=1",
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                console.log('Error en el BUS:'+ error);
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
export async function typeArancel(req: any, res: any) {
    try {
        console.log('Tipo Arancel: ');
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_ARANCEL,
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

export async function codeConvenio(req: any, res: any) {
    try {
        console.log('Codigo Convenio: ');
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_TYPE_CONV,
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

export async function typeProduct(req: any, res: any) {
    try {
        console.log('Tipo de producto: ');
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_TYPE_PROD,
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

export async function convenio(req: any, res: any) {
    try {
        console.log('Tipo de producto: ');
        Request.get({
            "headers": { "content-type": "application/json" },
            "url": process.env.PATH_CONVENIO,
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

export async function searchXML(req: any, res: any) {
    try {
        console.log('En el API esperando XML ');
        var parseString = require('xml2js').parseString;
        //var ppn = req.query.idCliente;
        //console.log('el idCliente ' + ppn);
        var xml = req.body.xmlClienteNatural;
        console.log('el xml ' + xml);
        if (xml.length > 20) {
            xml = xml.replace(/nat:/g, "");
            const rawResponse = JSON.parse(xml2json(xml, { compact: true, spaces: 4 }));
            const response = rawResponse["cliente"];
            infoClient = {
                "numeroIdentificacion": response['numeroIdentificacion']['_cdata'],
                "digitoIdentificacion": response['digitoIdentificacion']['_cdata'],
                "idCliente": response['idCliente']['_cdata']
            };
            console.log(infoClient);
        }
        return res.send("<html lang='en'><head><meta charset='utf-8'><script>self.close();</script></head><body></body></html>");
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send("<html lang='en'><head><meta charset='utf-8'><script>self.close();</script></head><body></body></html>");
    }
}

export async function searchVar(req: any, res: any) {
    try {
        console.log('En el API el valor ' + infoClient);
        var client = infoClient;
        infoClient = {};
        return client;
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('Error en la petición');
    }
}

export async function updateClient(req: any, res: any) {
    try {
        console.log('updateClient: ' + JSON.stringify(req.body));
        process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';
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
        process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';
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