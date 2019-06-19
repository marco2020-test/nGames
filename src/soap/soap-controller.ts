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

                if (response["voutCursors"]) {
                    if (response["voutCursors"][0]) {
                        //console.log('Cant::' + response["voutCursors"].length);
                        //console.log('Prueba: ' + response["voutCursors"][0]['consultainstitucional']['_text']);
                        var data = [];
                        var data1;
                        for (var i = 0; i < response["voutCursors"].length; i++) {
                            data1 = {
                                "cc": response['voutCursors'][i]['cc']["_text"],
                                "consultainstitucional": response['voutCursors'][i]['consultainstitucional']["_text"],
                                "consultaprivada": response['voutCursors'][i]['consultaprivada']["_text"],
                                "consultasincosto": response['voutCursors'][i]['consultasincosto']["_text"],
                                "correlativo": response['voutCursors'][i]['correlativo']["_text"],
                                "fechaAtencion": response['voutCursors'][i]['fechaAtencion']["_text"],
                                "horaAtencion": response['voutCursors'][i]['horaAtencion']["_text"],
                                "idagenda": response['voutCursors'][i]['idagenda']["_text"],
                                "idreserva": response['voutCursors'][i]['idreserva']["_text"],
                                "idservicio": response['voutCursors'][i]['idservicio']["_text"],
                                "idsucursal": response['voutCursors'][i]['idsucursal']["_text"],
                                "idtipoatencion": response['voutCursors'][i]['idtipoatencion']["_text"],
                                "isapre": response['voutCursors'][i]['isapre']["_text"],
                                "mp": response['voutCursors'][i]['mp']["_text"],
                                "nombremedico": response['voutCursors'][i]['nombremedico']["_text"],
                                "observaciones": response['voutCursors'][i]['observaciones']["_text"],
                                "ppnpaciente": response['voutCursors'][i]['ppnpaciente']["_text"],
                                "rutmedico": response['voutCursors'][i]['rutmedico']["_text"],
                                "rutpaciente": response['voutCursors'][i]['rutpaciente']["_text"],
                                "servicio": response['voutCursors'][i]['servicio']["_text"],
                                "sobrecupo": response['voutCursors'][i]['sobrecupo']["_text"],
                                "sucursal": response['voutCursors'][i]['sucursal']["_text"],
                                "tipoatencion": response['voutCursors'][i]['tipoatencion']["_text"],
                                "validodesde": response['voutCursors'][i]['validodesde']["_text"],
                                "valorparticular": response['voutCursors'][i]['valorparticular']["_text"],
                                "srvMessage": 0
                            };
                            data[i] = data1;
                        };
                        //console.log('salida:' + JSON.stringify(data));
                        return res.status(200).send({ data })
                    } else {
                        //console.log('Solo una pocision');
                        var data2;
                        data2 = {
                            "cc": response['voutCursors']['cc']["_text"],
                            "consultainstitucional": response['voutCursors']['consultainstitucional']["_text"],
                            "consultaprivada": response['voutCursors']['consultaprivada']["_text"],
                            "consultasincosto": response['voutCursors']['consultasincosto']["_text"],
                            "correlativo": response['voutCursors']['correlativo']["_text"],
                            "fechaAtencion": response['voutCursors']['fechaAtencion']["_text"],
                            "horaAtencion": response['voutCursors']['horaAtencion']["_text"],
                            "idagenda": response['voutCursors']['idagenda']["_text"],
                            "idreserva": response['voutCursors']['idreserva']["_text"],
                            "idservicio": response['voutCursors']['idservicio']["_text"],
                            "idsucursal": response['voutCursors']['idsucursal']["_text"],
                            "idtipoatencion": response['voutCursors']['idtipoatencion']["_text"],
                            "isapre": response['voutCursors']['isapre']["_text"],
                            "mp": response['voutCursors']['mp']["_text"],
                            "nombremedico": response['voutCursors']['nombremedico']["_text"],
                            "observaciones": response['voutCursors']['observaciones']["_text"],
                            "ppnpaciente": response['voutCursors']['ppnpaciente']["_text"],
                            "rutmedico": response['voutCursors']['rutmedico']["_text"],
                            "rutpaciente": response['voutCursors']['rutpaciente']["_text"],
                            "servicio": response['voutCursors']['servicio']["_text"],
                            "sobrecupo": response['voutCursors']['sobrecupo']["_text"],
                            "sucursal": response['voutCursors']['sucursal']["_text"],
                            "tipoatencion": response['voutCursors']['tipoatencion']["_text"],
                            "validodesde": response['voutCursors']['validodesde']["_text"],
                            "valorparticular": response['voutCursors']['valorparticular']["_text"],
                            "srvMessage": 0
                        };
                        //console.log('salida:' + data2);
                        return res.status(200).send({ data: data2 })
                    }
                } else {
                    var error = {
                        "data": [
                            {
                                "srvMessage": 1
                            },
                        ]
                    };
                    return res.status(200).send({ data: error })
                }

            }
            catch (e) {
                throw "Error on result"
            }
        })
        .catch((e: Error) => { console.log(e); res.status(403).send("Usuario y/o contraseña incorrectos") })
};
