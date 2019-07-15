import * as models from './utils-models';
import * as soap from 'soap';
import { xml2json } from 'xml-js';

exports.searchXML = async (req: any, res: any) => {
    
    try {
        const result = await models.searchXML(req, res);
        console.log(' en result'+ result);
        return res.send("<html lang='en'><head><meta charset='utf-8'><script>self.close();</script></head><body></body></html>");

       // return (result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send("<html lang='en'><head><meta charset='utf-8'><script>self.close();</script></head><body></body></html>");

        //return ('Error en la petición');
    }

};

exports.searchVar = async (req: any, res: any) => {
    
    try {
        const result = await models.searchVar(req, res);
        res.send(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};

exports.getBonoC = async (req: any, res: any) => {
    
    try {
        const result = await models.getBonoC(req, res);
        return(result);

    } catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        res.send('Error en la petición');
    }

};

exports.searchQuotes = async function (req: any, res: any): Promise<any> {
    const url = <string>process.env.PATH_SOAP_RESERVAS;

    var args = {
        'inRut': req.body.inRut,
        'inHolding': req.body.inHolding,
        'inTipoidentificacion': req.body.inTipoidentificacion,
        'inPasaporte': req.body.inPasaporte,
        'inPpn': req.body.inPpn
    };
    console.log('Argumentos nuevo:' + JSON.stringify(args));
    req.socket.setKeepAlive()
    return soap.createClientAsync(url, {})
        .then((client: any) => { return client.prcReservasXPacienteAsync(args) })
        .then((result: any[]) => {
            try {
                const rawResponse = JSON.parse(xml2json(result[1], { compact: true, spaces: 4 }))
                const response = rawResponse["S:Envelope"]["S:Body"]["prcReservasXPacienteResponse"]["prcReservasXPacienteResult"]
               
                if (response["voutCursors"]) {
                    if (response["voutCursors"][0]) {
                        console.log('Cant::' + response["voutCursors"].length);
                        console.log('Prueba: ' + response["voutCursors"][0]['fechaAtencion']['_text']);
                        var data = [];
                        var data1;
                        for (var i = 0; i < response["voutCursors"].length; i++) {
                           
                            data1 = {
                                "fechaAtencion": response['voutCursors'][i]['fechaAtencion']["_text"],
                                "horaAtencion": response['voutCursors'][i]['horaAtencion']["_text"],
                                "rutpaciente": response['voutCursors'][i]['rutpaciente']["_text"],
                                "nombremedico": response['voutCursors'][i]['nombremedico']["_text"],
                                "servicio": response['voutCursors'][i]['servicio']["_text"],
                                "sucursal": response['voutCursors'][i]['sucursal']["_text"],
                                "tipoatencion": response['voutCursors'][i]['tipoatencion']["_text"],
                                "srvMessage": 0
                            };
                            data[i] = data1;
                        };
                        //console.log('salida:' + JSON.stringify(data));
                        return res.status(200).send({ data })
                    } else {
                        //console.log('Solo una pocision');
                        var data2;
                        var data3 = [];
                        if(response['voutCursors']['fechaAtencion1']){
                            console.log('Si esta');
                        }else{
                            console.log('No esta');
                        }
                        data2 = {
                            "fechaAtencion": response['voutCursors']['fechaAtencion']["_text"],
                            "horaAtencion": response['voutCursors']['horaAtencion']["_text"],
                            "rutpaciente": response['voutCursors']['rutpaciente']["_text"],
                            "nombremedico": response['voutCursors']['nombremedico']["_text"],
                            "servicio": response['voutCursors']['servicio']["_text"],
                            "sucursal": response['voutCursors']['sucursal']["_text"],
                            "tipoatencion": response['voutCursors']['tipoatencion']["_text"],
                            "srvMessage": 0
                        };
                        //console.log('salida:' + data2);
                        data3[0] = data2;
                        return res.status(200).send({ data: data3 })
                    }
                } else {
                    var rep = [];
                    var erro;
                    erro = {
                        "srvMessage": 2
                    };
                    rep[0] = erro;
                    return res.status(200).send({ data: rep })
                }

            }
            catch (e) {
                throw "Error on result"
            }
        })
        .catch((e: Error) => { console.log(e); res.status(403).send("Usuario y/o contraseña incorrectos") })
};

exports.searchIndicators = async function (req: any, res: any): Promise<any> {
    const url = <string>process.env.PATH_SOAP_INDICADORES;
    console.log('soap: '+process.env.PATH_SOAP_INDICADORES);
    var args = {
        'idcliente': '5535214',
        'outSrvMessage': '',
        'inRut': '',
        'inCcosto': '',
        'inAmbito': '01'
    };
    console.log('Argumentos searchIndicators:' + JSON.stringify(args));
    req.socket.setKeepAlive()
    return soap.createClientAsync(url, {})
        .then((client: any) => { return client.atributoClienteAsync(args) })
        .then((result: any[]) => {
            try {
                console.log('prueb::'+result[1]);
                const rawResponse = JSON.parse(xml2json(result[1], { compact: true, spaces: 4 }))
                const response = rawResponse["S:Envelope"]["S:Body"]["atributoClienteResponse"]["atributoClienteResult"]
               
                if (response["outCantprod"]) {
                    var data=[
                        {
                            'outArrcodprod': response['outArrcodprod']['_text'],
                            'outArrprioridad': response['outArrprioridad']['_text'],
                            'outCantprod': response['outCantprod']['_text'],
                            'outInstitucional': response['outInstitucional']['_text'],
                            'outSrvMessage': response['outSrvMessage']['_text']
                        }
                    ];
                    res.send({ data});
                } else {
                    var error=[
                        {"srvMessage": 1}
                    ];
                    
                    return res.send({ data: error })
                }

            }
            catch (e) {
                throw "Error on result"
            }
        })
        .catch((e: Error) => { console.log(e); res.status(403).send("Usuario y/o contraseña incorrectos") })
};