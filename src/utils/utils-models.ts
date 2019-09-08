
let codSuper = '';

let infoClient = {};
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';

export async function searchXML(req: any, res: any) {
  return ("<html lang='en'><head><meta charset='utf-8'><script>self.close();</script></head><body></body></html>");
}

export async function searchVar(req: any, res: string) {
    try {
        console.log('En el API el valor ' + infoClient);
        var client = infoClient;
        infoClient = {};
        return client;
    }
    catch (err) {
        console.log('Error(' + err.code + '): ' + err.message);
        return ('Error en la petición');
    }
}

export async function getBonoC(req: any, res: any) {

}

export async function prevision(req: string) {

}
