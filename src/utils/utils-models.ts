import { xml2json } from 'xml-js';
let Request = require('request');
let codSuper = '';

let infoClient = {};
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';

export async function searchXML(req: any, res: any) {
    try {
        console.log('En el API esperando XML nuevo ');
        let parseString = require('xml2js').parseString;
        //var ppn = req.query.idCliente;
        //console.log('el idCliente ' + ppn);
        let xml = req.body.xmlClienteNatural;
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

export async function getBonoC(req: any, res: any) {
    try {
        console.log('Empresas: ');
        prevision(req.body.idIsapre).then(
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
        );
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('Error en la petición');
    }
}

export async function prevision(req: string) {
    try {
        console.log('Prevision: ');
        Request.get({
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
            return codSuper;
        });
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
}
