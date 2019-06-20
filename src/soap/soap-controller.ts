'use strict'

import * as soap from 'soap'

import { xml2json } from 'xml-js'

exports.searchQuotes = async function (req: any, res: any): Promise<any> {
    const url = <string>process.env.PATH_SOAP_RESERVAS;

    var args = {
        'inRut': req.body.inRut,
        'inHolding': req.body.inHolding,
        'inTipoidentificacion': req.body.inTipoidentificacion,
        'inPasaporte': req.body.inPasaporte,
        'inPpn': req.body.inPpn
    };
    console.log('Argumentos:' + JSON.stringify(args));
    req.socket.setKeepAlive()
    return soap.createClientAsync(url, {})
        .then((client: any) => { return client.prcReservasXPacienteAsync(args) })
        .then((result: any[]) => {
            try {
                const rawResponse = JSON.parse(xml2json(result[1], { compact: true, spaces: 4 }))
                const response = rawResponse["S:Envelope"]["S:Body"]["prcReservasXPacienteResponse"]["prcReservasXPacienteResult"]
                var fechaAtencion;
                var horaAtencion;
                var rutpaciente;
                var nombremedico;
                var servicio;
                var sucursal;
                var tipoatencion;
                if (response["voutCursors"]) {
                    if (response["voutCursors"][0]) {
                        console.log('Cant::' + response["voutCursors"].length);
                        console.log('Prueba: ' + response["voutCursors"][0]['fechaAtencion']['_text']);
                        var data = [];
                        var data1;
                        for (var i = 0; i < response["voutCursors"].length; i++) {
                            if(response['voutCursors'][i]['fechaAtencion1']){
                                console.log('Si esta');
                            }else{
                                console.log('No esta');
                            }
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
