import express from 'express'
import morgan from 'morgan'
import routerEnd from './routes/route'

class Server {
    public app = express.application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        this.app.set('port',process.env.port || 3001);
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }

    routes() {
        this.app.use('/api_admision', routerEnd);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Escuchando el puerto ', this.app.get('port'));
    });
}
}

const server = new Server();
server.start();