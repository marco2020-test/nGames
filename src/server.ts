import express from 'express'
import morgan from 'morgan'
import routerEnd from './routes/route'

class Server{
    public app=express.application;
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config(){
        this.app.set('port',process.env.PORT || 3001);
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    }

    routes(){
        this.app.use('/api_admision',routerEnd);
    }

    start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Escuchando el puerto ', this.app.get('port'))});
    }
}

const server=new Server();
server.start();