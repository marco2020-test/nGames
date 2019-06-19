import { Request, Response, Router, response } from 'express'
import * as control from '../controllers/controller';

class Route {
    public rout: Router;
    constructor() {
        this.rout = Router();
        this.routes();
    }

    routes() {
        this.rout.get('/searchList', control.getList);
        this.rout.post('/searchClient', control.getClient);
        this.rout.post('/searchQuotes', control.getQuotes);
    }
}

const routerEnd = new Route();
routerEnd.routes();
export default routerEnd.rout;