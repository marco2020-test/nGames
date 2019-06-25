export async function searchClient(req: any, res: any) {
    try {
        console.log('en el nuevo metodo');
        /*Request.post({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:3000/mock/searchQuotes",
            "body": JSON.stringify({
                "In_Rut": req.body.documento,
                "In_TipoIdentificacion": 2,
                "In_Holding": "1",
                "In_Pasaporte": "",
                "In_Ppn": "5305668"
            })
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            res.json( JSON.parse(body));
        });*/

        if (req.body.documento == '13871792-5') {
            var respuesta = {
                "PPN": "432296",
                "nombres": "JUAN FRANCISCO",
                "apellidoMaterno": "RODRIGUEZ",
                "apellidoPaterno": "ARIAS",
                "tipoIdentificacion": "1",
                "numeroIdentificacion": "13.871.792-5",
                "nombreTipoIdentificacion": "RUT",
                "nombreSexo": "Masculino",
                "fechaNacimientoTexto": "11-08-1963",
                "correo": "juanfranciscorodriguez@gmail.com",
                "telefono1": "+56 912345678",
                "telefono2": "+56 987654321",
                "direccion": "Av. presidente 12090",
                "nombreComuna": "Montalva",
                "nombreCiudad": "Santiago",
                "nombrePais": "Chile",
                "nombrePrevision": "Banmédica S.A.",
                "nombreNivelFonasa": "Nivel A",
                "srvMessage": 0
            }
            res.send({ respuesta });
        } else if (req.body.documento == '6383170-0') {
            var respuesta = {
                "PPN": "6383170",
                "nombres": "LORENA DEL PILAR",
                "apellidoMaterno": "LEON",
                "apellidoPaterno": "CUBILLOS",
                "tipoIdentificacion": "1",
                "numeroIdentificacion": "6383170-0",
                "nombreTipoIdentificacion": "RUT",
                "nombreSexo": "FEMENINO",
                "fechaNacimientoTexto": "11-08-1963",
                "correo": "lorenaleon@gmail.com",
                "telefono1": "+56 912345678",
                "telefono2": "+56 987654321",
                "direccion": "los alerces 859",
                "nombreComuna": "Macul",
                "nombreCiudad": "Santiago",
                "nombrePais": "Chile",
                "nombrePrevision": "Banmédica S.A.",
                "nombreNivelFonasa": "Nivel A",
                "srvMessage": 0
            }
            res.send({ respuesta });
        } else if (req.body.documento == '15796677-4') {
            var respuesta = {
                "PPN": "15796677",
                "nombres": "ALBERTO SANTIAGO",
                "apellidoMaterno": "ROSAS",
                "apellidoPaterno": "GONZALEZ",
                "tipoIdentificacion": "1",
                "numeroIdentificacion": "15796677-4",
                "nombreTipoIdentificacion": "RUT",
                "nombreSexo": "Masculino",
                "fechaNacimientoTexto": "11-08-1963",
                "correo": "lorenaleon@gmail.com",
                "telefono1": "+56 912345678",
                "telefono2": "+56 987654321",
                "direccion": "Monjitas 859",
                "nombreComuna": "Centro",
                "nombreCiudad": "Santiago",
                "nombrePais": "Chile",
                "nombrePrevision": "Banmédica S.A.",
                "nombreNivelFonasa": "Nivel A",
                "srvMessage": 0
            }
            res.send({ respuesta });
        } else {
            var error = {
                "data": [
                    {
                        "srvMessage": 2
                    },
                ]
            };
            res.send({ respuesta: error });
        }
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('Error en la petición');
    }
}

export async function searchQuotes(req: any, res: any) {
    try {
        console.log('Metodo viejo: ' + req.body.inRut);
        /*Request.post({
            "headers": { "content-type": "application/json" },
            "url": "http://localhost:3000/mock/searchQuotes",
            "body": JSON.stringify({
                "In_Rut": req.body.documento,
                "In_TipoIdentificacion": 2,
                "In_Holding": "1",
                "In_Pasaporte": "",
                "In_Ppn": "5305668"
            })
        }, (error: Error, response: Response, body: string) => {
            if (error) {
                return console.dir(error);
            }
            res.json( JSON.parse(body));
        });*/

        if (req.body.inRut == '432296') {
            var respuesta = [];
            var data;
            data = {
                "cc": "5305668",
                "consultainstitucional": "101002",
                "consultaprivada": "101051",
                "consultasincosto": "101044",
                "correlativo": "1",
                "fechaAtencion": "0406201",
                "horaAtencion": "14:00",
                "idagenda": "1622216",
                "idreserva": "27251534",
                "idservicio": "2",
                "idsucursal": "1",
                "idtipoatencion": "C",
                "isapre": "1",
                "mp": "0",
                "nombremedico": "GOMEZ NUÑEZ MARCELA ANDREA",
                "observaciones": "Internet!! - Rut Solicitante: 22754134-2",
                "ppnpaciente": "5305668",
                "rutmedico": "14113120",
                "rutpaciente": "13.871.792-5",
                "servicio": "MEDICINA INTERNA",
                "sobrecupo": "N",
                "sucursal": "Vitacura",
                "tipoatencion": "CONSULTA",
                "validodesde": "0102201",
                "valorparticular": "60000",
                "srvMessage": 0
            };
            respuesta[0] = data;
            data = {
                "cc": "7714",
                "consultainstitucional": "101002",
                "consultaprivada": "101051",
                "consultasincosto": "101044",
                "correlativo": "1",
                "fechaAtencion": "05062019",
                "horaAtencion": "12:00",
                "idagenda": "1411",
                "idreserva": "27251540",
                "idservicio": "4",
                "idsucursal": "1",
                "idtipoatencion": "C",
                "isapre": "1",
                "mp": "0",
                "nombremedico": "BLANCO MORENO GRACIELA",
                "observaciones": "Internet!! - Rut Solicitante: 16010816-9",
                "ppnpaciente": "5305668",
                "rutmedico": "8934665",
                "rutpaciente": "13.871.792-5",
                "servicio": "OFTALMOLOGIA",
                "sobrecupo": "N",
                "sucursal": "Vitacura",
                "tipoatencion": "CONSULTA",
                "validodesde": "01022017",
                "valorparticular": "60000"

            };
            respuesta[1] = data;
            data = {
                "cc": "7718",
                "consultainstitucional": "101002",
                "consultaprivada": "101051",
                "consultasincosto": "101044",
                "correlativo": "1",
                "fechaAtencion": "0506201",
                "horaAtencion": "17:00",
                "idagenda": "1968129",
                "idreserva": "27251535",
                "idservicio": "2",
                "idsucursal": "1",
                "idtipoatencion": "C",
                "isapre": "1",
                "mp": "0",
                "nombremedico": "VALLEJO VERGARA PATRICIO EUGENIO",
                "observaciones": "Internet!! - Rut Solicitante: 16010816-9",
                "ppnpaciente": "5305668",
                "rutmedico": "14166704",
                "rutpaciente": "13.871.792-5",
                "servicio": "MEDICINA INTERNA",
                "sobrecupo": "N",
                "sucursal": "Vitacura",
                "tipoatencion": "CONSULTA",
                "validodesde": "01062017",
                "valorparticular": "0"

            };
            respuesta[2] = data;
            res.send({ data: respuesta });
        } else {
            var rep = [];
            var erro;
            erro = {
                "srvMessage": 2
            };
            rep[0] = erro;
            return ({ data: rep })
        }
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return res.send('Error en la petición');
    }
}
