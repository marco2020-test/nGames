const clientController = require('../client/client-controller');
import { ClienteVOResponse, ClienteVOResponseMesaje } from '../client/client-models'

exports.cachingClient = async (req: any, res: any) => {
    try {

        console.log('client-controller cachingClient ini');

        let ppnDocumento = req.body.documento
        const resultClienteMongo = clientController.searchClienteMongo(ppnDocumento)
        console.log('client-controller  PPNCliente: ' + req.body.documento + ', resultClienteMongo:' + resultClienteMongo);

        resultClienteMongo.then((clientMongo: any) => {
            console.log('client-controller clientMongo:' + clientMongo)

            if (clientMongo === null) {

                console.log('client-controller no existe cliente en caching');
                const result = clientController.searchClient3(req, res);
                result.then((client: any) => {

                    console.log('cliente caching:' + JSON.stringify(client))
                    const data = JSON.stringify(client);
                    const formato1N = JSON.parse(data);
                    console.log('valor mensaje OUT_COD' + formato1N.OUT_COD)

                    if (formato1N.OUT_COD === 0) {

                        let clienteVOResnOeNC: ClienteVOResponseMesaje = {
                            OUT_COD: 0,
                            OUT_MSG: "Cliente no encontrado"
                        }
                        return res.json(clienteVOResnOeNC);



                    } else if (formato1N.OUT_COD === 1) {
                        console.log('cliente encontrado en servicio');

                        let clienteVORes: ClienteVOResponse = {
                            clienteVOResponse: {
                                CLNU_IDCLIENTENATURAL: formato1N.clienteVOResponse.CLNU_IDCLIENTENATURAL,
                                CLNU_TIPOIDENTIFICACION: formato1N.clienteVOResponse.CLNU_TIPOIDENTIFICACION,
                                CLVA_NUMIDENTIFICACION: formato1N.clienteVOResponse.CLVA_NUMIDENTIFICACION,
                                CLVA_DVIDENTIFICACION: formato1N.clienteVOResponse.CLVA_DVIDENTIFICACION,
                                CLVA_NOMBRES: formato1N.clienteVOResponse.CLVA_NOMBRES,
                                CLVA_APEPATERNO: formato1N.clienteVOResponse.CLVA_APEPATERNO,
                                CLVA_APEMATERNO: formato1N.clienteVOResponse.CLVA_APEMATERNO,
                                CLDA_FECHANACIMIENTO: formato1N.clienteVOResponse.CLDA_FECHANACIMIENTO,
                                CLVA_SEXO: formato1N.clienteVOResponse.CLVA_SEXO,
                                CLVA_ESTADO_CIVIL: formato1N.clienteVOResponse.CLVA_ESTADO_CIVIL,
                                CLVA_ETNIA: formato1N.clienteVOResponse.CLVA_ETNIA,
                                CLVA_ACTIVIDAD: formato1N.clienteVOResponse.CLVA_ACTIVIDAD,
                                CLVA_DIRECCION: formato1N.clienteVOResponse.CLVA_DIRECCION,
                                CLVA_CELULAR:  formato1N.clienteVOResponse.CLVA_CELULAR,
                                CLVA_EMAIL:  formato1N.clienteVOResponse.CLVA_EMAIL,
                                CLVA_NOMBRE_PAIS: formato1N.clienteVOResponse.CLVA_NOMBRE_PAIS,
                                CLVA_NOMBRE_REGION: formato1N.clienteVOResponse.CLVA_NOMBRE_REGION,
                                CLVA_TELEFONO_FIJO: formato1N.clienteVOResponse.CLVA_TELEFONO_FIJO,
                                CLVA_CODIGO_COMUNA: formato1N.clienteVOResponse.CLVA_CODIGO_COMUNA,
                                CLVA_COD_PREVISION: formato1N.clienteVOResponse.CLVA_COD_PREVISION,
                                CLVA_ID_PAIS: formato1N.clienteVOResponse.CLVA_ID_PAIS
                            },
                            OUT_COD: 1,
                            OUT_MSG: "Busqueda Exitosa"
                        }
                        clientController.saveClienteMongo(clienteVORes, req, res)
                        return res.json(client);
                    }else{
                        return res.json(client);
                    }

                }).catch(function(error: any) {
                    console.log('Error al consultar servicio cliente.');
                    
                    let clienteVOResnOeNC: ClienteVOResponseMesaje = {
                        OUT_COD: 0,
                        OUT_MSG: "Cliente no encontrado"
                    }
                    return res.json(clienteVOResnOeNC);
                })

            } else {
                console.log('existe cliente en caching clientMongo');

                let clienteVORes: ClienteVOResponse = {
                    clienteVOResponse: {
                        CLNU_IDCLIENTENATURAL: clientMongo.CLNU_IDCLIENTENATURAL,
                        CLNU_TIPOIDENTIFICACION: clientMongo.CLNU_TIPOIDENTIFICACION,
                        CLVA_NUMIDENTIFICACION: clientMongo.CLVA_NUMIDENTIFICACION,
                        CLVA_DVIDENTIFICACION: clientMongo.CLVA_DVIDENTIFICACION,
                        CLVA_NOMBRES: clientMongo.CLVA_NOMBRES,
                        CLVA_APEPATERNO: clientMongo.CLVA_APEPATERNO,
                        CLVA_APEMATERNO: clientMongo.CLVA_APEMATERNO,
                        CLDA_FECHANACIMIENTO: clientMongo.CLDA_FECHANACIMIENTO,
                        CLVA_SEXO: clientMongo.CLVA_SEXO,
                        CLVA_ESTADO_CIVIL: clientMongo.CLVA_ESTADO_CIVIL,
                        CLVA_ETNIA: clientMongo.CLVA_ETNIA,
                        CLVA_ACTIVIDAD: clientMongo.CLVA_ACTIVIDAD,
                        CLVA_DIRECCION: clientMongo.CLVA_DIRECCION,
                        CLVA_CELULAR:  clientMongo.CLVA_CELULAR,
                        CLVA_EMAIL:  clientMongo.clienteVOResponse.CLVA_EMAIL,
                        CLVA_NOMBRE_PAIS: clientMongo.CLVA_NOMBRE_PAIS,
                        CLVA_NOMBRE_REGION: clientMongo.CLVA_NOMBRE_REGION,
                        CLVA_TELEFONO_FIJO: clientMongo.CLVA_TELEFONO_FIJO,
                        CLVA_CODIGO_COMUNA: clientMongo.CLVA_CODIGO_COMUNA,
                        CLVA_COD_PREVISION: clientMongo.CLVA_COD_PREVISION,
                        CLVA_ID_PAIS: clientMongo.CLVA_ID_PAIS
                    },
                    OUT_COD: 1,
                    OUT_MSG: "Busqueda Exitosa"
                }

                return res.json(clienteVORes);
            }
        })
    }
    catch (err) {
        console.log('cachingClient Error(' + err.code + '): ' + err.message);
        return res.send('CachingClient Error en la petición');
    }
};