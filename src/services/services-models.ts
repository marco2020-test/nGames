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
        //console.log('prueb::' + req.query.idCliente);
        //console.log(req.body);
        //console.log(req.body.xmlClienteNatural);
        var xml = req.body.xmlClienteNatural;
        xml = xml.replace(/nat:/g, "");
        const rawResponse = JSON.parse(xml2json(xml, { compact: true, spaces: 4 }));
        const response = rawResponse["cliente"];
        console.log(response['numeroIdentificacion']['_cdata']);
        console.log(response['digitoIdentificacion']['_cdata']);
        console.log(response['idCliente']['_cdata']);
        infoClient = {
            "numeroIdentificacion": response['numeroIdentificacion']['_cdata'],
            "digitoIdentificacion": response['digitoIdentificacion']['_cdata'],
            "idCliente": response['idCliente']['_cdata']
        };
        console.log(infoClient);

    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('No se pudo obtener información del paciente');
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
        return res.send('No se pudo obtener información del paciente');
    }
}