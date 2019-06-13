"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const route_1 = __importDefault(require("./routes/route"));
class Server {
    constructor() {
        this.app = express_1.default.application;
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.port || 3001);
        this.app.use(express_1.default.json());
        this.app.use(morgan_1.default('dev'));
    }
    routes() {
        this.app.use('/api_admision', route_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Escuchando el puerto ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
