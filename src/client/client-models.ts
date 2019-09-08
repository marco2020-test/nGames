

let infoClient = {};
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';

export async function searchClient1(req: any, res: any) {

}

export async function searchQuotes(req: any, res: any) {

}

export async function updateClient(req: any, res: any) {

}

export async function updatePrevision(req: any, res: any) {

}

export async function getBono(req: any, res: any) {

}

export async function getBonoC(req: any, res: any) {

}

export async function prevision(req: string) {

}

export async function searchClient(req: any, res: any) {

}

export async function getToken() {

}

export async function getCalugas(req: any, res: any) {

}


export function saveClienteMongo(clienteVOResponse: ClienteVOResponse, req: any, res: any) {

        return res.send('Error en la petición');
    
}

export async function searchClienteMongo( ppnCliente:any) {

}

export async function searchClient3(req: any, res: any) {

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
        CLVA_CELULAR?: string,
        CLVA_EMAIL?: string,
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