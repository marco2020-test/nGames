import * as models from './utils-models';


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
   return res.status(200).send({ })
};

exports.searchIndicators = async function (req: any, res: any): Promise<any> {
  return res.send({})
};