import { Request, Response, Router, response } from 'express'
import Cliente from '../models/clientModel'

var pg = require("pg")
var connectionString = "pg://admision:admision@stelios.trebolit.local:5432/admision";
var client = new pg.Client(connectionString);
 
client.connect((err: Error) => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
});
export function getList(req: Request, resp: Response) {
    var query = 'SELECT "ID_LIST", "DESCRIPTION" FROM public."listSelections"';
    client.query(query, (err: Error, res: Response) => {
        if (err) {
            console.error(err.stack)
        } else {
            var formato = JSON.stringify(res);
            var formatoN = JSON.parse(formato);
            console.log(formatoN);
            for (var i = 0; i < formatoN['rows'].length; i++) {
                console.log("Aqui esta " + formatoN['rows'][i].DESCRIPTION);
                console.log("El valor es " + formatoN['rows'][i].DESCRIPTION);
            }
            resp.json({ formatoN });
        }
    });
}

export function getClient(req: Request, res: Response) {
    const { documento } = req.body;
    const newPost = new Cliente({ documento });
    console.log(req.body.documento);
    var Request = require("request");
    var respuesta;
    /*Request.post({
        "headers": { "content-type": "application/json", "Access-Control-Allow-Headers": "*" },
    Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://localhost:3000/mock/searchClient",
        "body": JSON.stringify({
            "rut": req.body.documento
        })
    }, (error: Error, response: Response, body: string) => {
        if (error) {
            return console.dir(error);
        }
        res.json( JSON.parse(body));
    });*/

    if (req.body.documento == '13.871.792-5') {
        respuesta = {
            "PPN": "432296",
            "nombres": "LORENA DEL PILAR",
            "apellidoMaterno": "LEON",
            "apellidoPaterno": "CUBILLOS",
            "tipoIdentificacion": "1",
            "numeroIdentificacion": "13.871.792-5",
            "nombreTipoIdentificacion": "RUT",
            "nombreSexo": "Masculino",
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

        res.json({ respuesta });
    } else 

    if (req.body.documento == '20.871.792-5') {
        respuesta = {
            "PPN": "445566",
            "nombres": "SERGIO ANTONIO",
            "apellidoMaterno": "GONZALES",
            "apellidoPaterno": "CEBALLOS",
            "tipoIdentificacion": "1",
            "numeroIdentificacion": "20.871.792-5",
            "nombreTipoIdentificacion": "RUT",
            "nombreSexo": "Masculino",
            "fechaNacimientoTexto": "11-08-1963",
            "correo": "sergioantonio@gmail.com",
            "telefono1": "+56 912345678",
            "telefono2": "+56 987654321",
            "direccion": "Monjitas 859",
            "nombreComuna": "Santiago",
            "nombreCiudad": "Santiago",
            "nombrePais": "Chile",
            "nombrePrevision": "Banmédica S.A.",
            "nombreNivelFonasa": "Nivel A",
            "srvMessage": 0
        }

        res.json({ respuesta });
    } else {
        respuesta = 
                {
                    "srvMessage": 1
                };
        res.json({ respuesta });
    }

}

export function getQuotes(req: Request, res: Response) {
    const { documento } = req.body;
    const newPost = new Cliente({ documento });
    console.log(req.body.documento);
    var Request = require("request");

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

    if (req.body.documento == '432296') {
        var respuesta = {
            "data": [
                {
                    "cc": "5305668",
                    "consultainstitucional": "101002",
                    "consultaprivada": "101051",
                    "consultasincosto": "101044",
                    "correlativo": "1",
                    "fecha_atencion": "0406201",
                    "hora_atencion": "14:00",
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
                },
                {
                    "cc": "7714",
                    "consultainstitucional": "101002",
                    "consultaprivada": "101051",
                    "consultasincosto": "101044",
                    "correlativo": "1",
                    "fecha_atencion": "05062019",
                    "hora_atencion": "12:00",
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

                },
                {
                    "cc": "7718",
                    "consultainstitucional": "101002",
                    "consultaprivada": "101051",
                    "consultasincosto": "101044",
                    "correlativo": "1",
                    "fecha_atencion": "0506201",
                    "hora_atencion": "17:00",
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

                },
            ]
        };

        res.json({ data: respuesta });
    } else {
        var error = {
            "data": [
                {
                    "srvMessage": 1
                },
            ]
        };
        res.json({ data: error });
    }
}